module.exports = {
  print(HTML, settings = null) {
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
