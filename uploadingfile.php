<?php
  if(isset($_POST['fileName'])){
    $fp=fopen('upLoading/'.$_POST['fileName'].'.'.$_POST['usedLang'],'w') or die ("cannot open");
    fwrite($fp,$_POST['codeText']);
    fclose($fp);	
  }
?>
