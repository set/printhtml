module.exports = {
  print(HTML, settings) {
    settings = {
      width: 800,
      height: 900,
      ...settings,
    };
    // Open the print window
    const WinPrint = window.open('', '', `left=0,top=0,width=${settings.width},height=${settings.height},toolbar=0,scrollbars=0,status=0`);
    WinPrint.document.write(`<!DOCTYPE html>
        <html>
          <head>
          <style>
            svg { width: 100% !important; height: 100% !important; }
          </style>
          </head>
          <body>
            ${HTML}
          </body>
        </html>`);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();

  }
};
