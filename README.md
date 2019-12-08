禁止网页上F12，Ctrl+U，Ctrl+S，出现弹窗并且语音提示
====  
前言
-------  
演示地址：https://www.akagicv.com （其实是我的博客） <br>  
能防止F12（控制台） Ctrl+U（新建窗口查看源代码） Ctrl+S（保存网页） <br>  
使用方法（萌新版）
------- 
页面内引入css <br>
```html
<link rel="stylesheet" href="https://akagicv-1252448470.cos.ap-shanghai.myqcloud.com/add.css" type="text/css" />
```
页面内引入JS代码
```html
<script src="https://akagicv-1252448470.cos.ap-shanghai.myqcloud.com/f12.js"></script>
```
页面内引入音频资源（可替换为自己的音频文件）<br>
```html
<audio src="https://akagicv-1252448470.cos.ap-shanghai.myqcloud.com/error.wav" style="display:none" preload="auto" id="audio"></audio>
```
页面内引入提示框<br>
```html
<div id="kzt" class="tc">
  <div class="wenzi">
    <span class="gb">&times;</span>
    <p>白面鸮检测到非法打开控制台的请求</p>
  </div> 
</div>

<div id="ydm" class="tc">
  <div class="wenzi">
    <span class="gb">&times;</span>
    <p>白面鸮检测到非法查看源代码的请求</p>
  </div>
</div>

<div id="bc" class="tc">
  <div class="wenzi">
    <span class="gb">&times;</span>
    <p>白面鸮检测到非法保存网页的请求</p>
  </div>
</div>
```
结束 <br>
使用方法（大佬版）
------- 
下载文件 <br>
结束
