function multibackground(options) {
  let multibg = document.querySelectorAll('.multi-bg');

  if(options.backgroud_type = 'solid')
    options.backgroud_type = 'red'

  else
    options.backgroud_type = 'rgb(2,0,36)'

    multibg.forEach(div => {
      div.style.background = `rgb(2,0,36)`;
    });

}

module.exports.multibackground = multibackground;
