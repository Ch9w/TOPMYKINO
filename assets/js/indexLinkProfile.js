if (localStorage.getItem('auth') == 'true') {
    document.querySelectorAll('.auth').forEach((link) => {
      link.setAttribute('href','./pages/profile.html')
    })
  }
