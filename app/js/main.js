$(document).ready(function () {
  var modGb = [32, 128, 256];
  var mobColorPriсe = {
    iphone32: {
      black: 3657,
      gray: 3657,
      gold: 3657,
      white: 3657,
      pink: 3657,
      red: 3657
    },
    iphone128: {
      black: 4170,
      gray: 4215,
      gold: 4170,
      white: 4170,
      pink: 4170,
      red: 4490
    },
    iphone256: {
      black: 4674,
      gray: 4674,
      gold: 4674,
      white: 4674,
      pink: 4674,
      red: 4765
    },

    samsung32: {
      black: "none",
      gray: 3657,
      gold: 3657
    },
    samsung128: {
      black: 4170,
      gray: 4215,
      gold: 4170
    },
    samsung256: {
      black: 4674,
      gray: 4674,
      gold: 4674
    }
  };


  function lenColor(argument) {
    for (var i = 1; i < argument.length; i++) {
      var dash = '-';
      var colorPhone = colorPhone + argument[i];
      console.log(colorPhone);
    }
  }

  $('[data-toggle]').click(function () {
    var href = $(this).attr('href');
    lenColor(href);
  });
})