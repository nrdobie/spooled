import { jsPDF } from "jspdf";
import QRCode from "qrcode";

import { Spools } from "@/app/_fetchers/get-spools";
import "@/assets/fonts/Roboto-bold";
import "@/assets/fonts/Roboto-normal";
import "@/assets/fonts/RobotoCondensed-bold";
import "@/assets/fonts/RobotoMono-bold";

type PdfTestProps = {
  spools: Spools;
};

export default async function PdfTest({ spools }: PdfTestProps) {
  const data = await generatePdf(spools);

  return (
    <object data={data} type="application/pdf" className="aspect-square w-full max-w-4xl">
      <p>PDF could not be displayed</p>
    </object>
  );
}

async function generatePdf(spools: Spools) {
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "in",
    format: [2.25, 1.25],
  });

  doc.deletePage(1);

  for (const spool of spools) {
    const page = doc.addPage();
    page.setFontSize(8);
    page.setFont("Roboto", "normal");
    page.text(spool.filament.brand.name, 0.1, 0.2);
    const x = doc.getTextWidth(`${spool.filament.brand.name} `) + 0.1;
    console.log(x);
    page.setFont("Roboto", "bold");
    page.text(spool.filament.color, x, 0.2);

    page.setFontSize(30);
    page.setFont("RobotoCondensed", "bold");
    page.text(spool.filament.filamentType.shortName, 0.1, 0.65);

    page.setFontSize(14);
    page.text(spool.filament.filamentTypeSubtype?.name ?? "Basic", 0.1, 0.85);

    page.setFontSize(8);
    page.setFont("Roboto", "normal");
    const labelWidth = doc.getTextWidth("Nozzle: ") + 0.1;

    if (spool.filament.nozzleMinTemp && spool.filament.nozzleMaxTemp) {
      page.setFont("Roboto", "normal");
      page.text("Nozzle: ", 0.1, 1.05);
      page.setFont("Roboto", "bold");
      page.text(`${spool.filament.nozzleMinTemp} - ${spool.filament.nozzleMaxTemp} °C`, labelWidth, 1.05);
    }

    if (spool.filament.bedMinTemp && spool.filament.bedMaxTemp) {
      page.setFont("Roboto", "normal");
      page.text("Bed: ", 0.1, 1.15);
      page.setFont("Roboto", "bold");
      page.text(`${spool.filament.bedMinTemp} - ${spool.filament.bedMaxTemp} °C`, labelWidth, 1.15);
    }

    page.rect(1.8, 0, 2.25 - 1.8, 1.25, "DF");

    const qr = await QRCode.toDataURL(`https://spld.xyz/${spool.humanReadableId}`, {
      margin: 0,
      color: {
        dark: "#FFFFFF",
        light: "#000000",
      },
    });

    page.addImage(qr, "PNG", 2.1, 0.1, 0.25, 0.25, undefined, "FAST", 90);

    page.setFontSize(14);
    page.setFont("RobotoMono", "bold");
    page.setTextColor(255, 255, 255);
    const textWidth = doc.getTextWidth(spool.humanReadableId.toUpperCase());
    page.text(spool.humanReadableId.toUpperCase(), 2.25 - 0.2, 0.4 + textWidth, { angle: 90 });
    page.setTextColor(0, 0, 0);
  }

  return doc.output("dataurlstring");
}
