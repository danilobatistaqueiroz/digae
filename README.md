
[![screen-shot](https://user-images.githubusercontent.com/32627919/255275735-c033f65d-1a69-4b70-aa7c-1f16c5d76d77.png)](https://user-images.githubusercontent.com/32627919/255270715-8e4fe8a2-3b25-49ca-81fa-3d94c73ddcca.mp4)

[![screen-cast](https://user-images.githubusercontent.com/32627919/255298661-b99a89aa-aaa0-4630-ba46-1f5adffe780e.png)](https://user-images.githubusercontent.com/32627919/255298622-46c6fd1f-18fd-4d70-82ea-de066d91fd46.mp4)



ionic start whatsclone blank --type=angular --capacitor --project-id=whatsclone --package-id=br.labs.whatsclone


balloons melhor que popovers:  
https://kazzkiq.github.io/balloon.css/
tooltip com close button:  
http://jsfiddle.net/YM84U/19/



pnpm i @capacitor/preferences

Entrei no site:  
https://hotpot.ai/design/

https://fonts.google.com/icons?selected=Material+Icons+Round:task_alt:&icon.query=check&icon.style=Rounded
https://feathericons.com/?query=plus.square.fill&s=HotpotDesign

Gerei o design da tela.  
Exportei o png  
Depois peguei apenas o background e exportei png.  
Abri no Gimp, e recortei os textos, logo e gerei layers com transparência.  
Exportei cada layer como um png com background transparente.  

Os textos usei a fonte Fredoka no Gimp

Removi da tela o scrollbar.  
Cada tab que corre da esquerda para a direita muda o z-index.  

Os Slides de First-Access foram feitos com:  
https://hotpot.ai/templates/splash-screen


Adicionei avatars:  
https://www.flaticon.com/free-icons/avatar/6



adb shell am start -n "br.labs.whatsclone/br.labs.whatsclone.MainActivity" -a android.intent.action.MAIN -c android.intent.category.LAUNCHER;


```html
<div class="container">
    <div class="row">
        <div class="col">
            <h1>Some heading</h1>
            <p>This is not a love song</p>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#leftModal">Left</button>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#rightModal">Right</button>
        </div>
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="rightModal" tabindex="-1" role="dialog" aria-labelledby="rightModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-slideout" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="rightModalLabel">Right On</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="modal-body">
        Right Modal
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<!-- Left modal -->
<div class="modal fade" id="leftModal" tabindex="-1" role="dialog" aria-labelledby="leftModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-slideout" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="leftModalLabel">Left On</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="modal-body">
        Left Modal
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```

```css
#rightModal .modal-dialog-slideout {
  min-height: 100%;
  margin: 0 0 0 auto;
  background: #fff;
}

.modal.fade .modal-dialog.modal-dialog-slideout {
  -webkit-transform: translate(100%, 0)scale(1);
  transform: translate(100%, 0)scale(1);
}

.modal.fade.show .modal-dialog.modal-dialog-slideout {
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
  display: flex;
  align-items: stretch;
  -webkit-box-align: stretch;
  height: 100%;
}

.modal.fade.show .modal-dialog.modal-dialog-slideout .modal-body {
  overflow-y: auto;
  overflow-x: hidden;
}

.modal-dialog-slideout .modal-content {
  border: 0;
}

.modal-dialog-slideout .modal-header,
.modal-dialog-slideout .modal-footer {
  height: 69px;
  display: block;
}

#rightModal .modal-dialog-slideout .modal-header h5 {
  float: left;
  color: blue;
}

#leftModal .modal-dialog-slideout {
  min-height: 100%;
  margin: 0 auto 0 0;
  background: #fff;
}

#leftModal .modal-dialog-slideout .modal-header h5 {
  float: left;
  color: red;
}

#leftModal.modal.fade:not(.show) .modal-dialog.modal-dialog-slideout {
  -webkit-transform: translate(100%, 0)scale(1);
  transform: translate(-100%, 0)scale(1);
}
```