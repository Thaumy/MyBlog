$(document).ready(function(){$('span.sp_cate a').on("prepend","a[rel='category tag']",relf());$('span.sp_comment a').on("prepend","a[class='comment!tag']",claf());});function relf(){$("a[rel='category tag']").prepend("<div class='padd'></div>").on("prepend","document",relf());}function claf(){$("a[class='comment!tag']").prepend("<div class='padd'></div>").on("prepend","document",claf());}