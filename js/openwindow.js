function popitup(url) {
        newwindow=window.open(url,'Calculatrice Avec JavaScript','height=450,width=400');
        if (window.focus) {newwindow.focus()}
        return false;
    }
    