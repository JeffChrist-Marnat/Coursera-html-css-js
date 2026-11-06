<HTML>
<BODY>
<SCRIPT language="javascript">
kata= "Pemrograman Web";
document.write("<p style='color:blue;font‐weight:bold'>Kata:"+kata+"</p><BR>");
document.write("Panjang Kata adalah "+kata.length+"<BR>");
document.write(“Animasi Kata adalah "+kata.blink()+"<BR>");
document.write("Karakter ke-0 adalah "+kata.charAt(o)+"<BR>");
document.write("Kata menjadi huruf besar"+kata.toUpperCase()+"<BR>");
document.write("Kata menjadi huruf kecil"+kata.toLowerCase()+"<BR>");
document.write("Index huruf W adalah"+kata.indexOf("W")+"<BR>");
awal=kata.indexOf("W");
akhir=kata.length;
document.write("Kata yang tersisa adalah "+kata.substring(awal,akhir));
</SCRIPT>
</BODY>
</HTML>