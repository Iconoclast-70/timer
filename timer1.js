const alarm = function() {
  if (process.argv.length > 2) {
    let args = process.argv.slice(2);
    let beepLength = 0;
    for (const beep of args) {
      if ((beep > 0) && (isNaN(beep)) === false) {
        beepLength = beep * 1000;
        setTimeout(() => {
          process.stdout.write('\x07');
        }, beepLength);
      }
    }
  }
};

alarm();