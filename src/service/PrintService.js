export default class PrintService{
    printPage(id){
      let getUrl = window.location;
      let baseUrl = getUrl .protocol + "//" + getUrl.host.split("/")[0];

      let defaultSpecs = ["fullscreen=yes","titlebar=yes", "width=825"];
      const element = window.document.getElementById(id);
      const win = window.open("", "_blank", defaultSpecs);

      let bootstrapCss = win.document.createElement("link");
      bootstrapCss.setAttribute("rel", "stylesheet");
      bootstrapCss.setAttribute("type", "text/css");
      bootstrapCss.setAttribute("href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css");
      win.document.getElementsByTagName("head")[0].appendChild(bootstrapCss);

      let bootstrapVueCss = win.document.createElement("link");
      bootstrapVueCss.setAttribute("rel", "stylesheet");
      bootstrapVueCss.setAttribute("integrity", "sha512-YnP4Ql71idaMB+/ZG38+1adSSQotdqvixQ+dQg8x/IFA4heIj6i0BC31W5T5QUdK1Uuwa01YdqdcT42q+RldAg==");
      bootstrapVueCss.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-vue/2.21.2/bootstrap-vue.min.css");
      bootstrapVueCss.setAttribute("crossorigin", "anonymous");
      bootstrapVueCss.setAttribute("referrerpolicy", "no-referrer");
      win.document.getElementsByTagName("head")[0].appendChild(bootstrapVueCss);

      let mainCss = win.document.createElement("link");
      mainCss.setAttribute("rel", "stylesheet");
      mainCss.setAttribute("type", "text/css");
      mainCss.setAttribute("href", baseUrl + "/print.css");
      win.document.getElementsByTagName("head")[0].appendChild(mainCss);

      let link1 = win.document.createElement("style");
      link1.innerHTML = "@media {";
      link1.innerHTML += "body {margin: 2.5cm 0;display: block;}";
      link1.innerHTML += "#no-print{display:none}";
      link1.innerHTML += "#print-only{display:block; }";
      link1.innerHTML += ".printable-answers{page-break-before: always; padding-top: 30px;}";
      link1.innerHTML += ".d-print-page-break{page-break-before: always !important;}";
      link1.innerHTML += ".d-print-none{display:none}";
      link1.innerHTML += ".d-print-table{width:400px;}";
      link1.innerHTML += ".d-print-footer{position: fixed;bottom: 0;display: block;}";
      link1.innerHTML += ".d-print-col-bs{height:30px;}";
      link1.innerHTML += ".d-print-col-bs1{height:40px;}";
      link1.innerHTML += ".d-print-col{height:200px;}}";
      win.document.getElementsByTagName("head")[0].appendChild(link1);

      let link2 = win.document.createElement("style");
      link2.innerHTML = "@page{padding-top: 30px; padding-bottom: 30px;}";
      win.document.getElementsByTagName("head")[0].appendChild(link2);

      let innerHtml = element.outerHTML;
      let baseImageUrl = baseUrl + "/static/img";
      innerHtml = innerHtml.replace(/\/static\/img/g, baseImageUrl);
      let body = win.document.getElementsByTagName("body")[0];
      body.innerHTML = innerHtml;

      setTimeout(() => {
        win.document.close();
        win.focus();
        win.print();
        win.close();
      }, 1000);
    }

}