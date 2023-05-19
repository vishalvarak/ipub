// Render script.
// This script renders non editable DOM objects.
window.onbeforeunload = null;
localStorage.clear();
var js = document.createElement("script");
var lang;
var p_tags;
var public_copied_node = '';
var rightsideview = false;
var leftsideview = false;
var pstylesdiv = false;
var cstylesdiv = false;
var rstylesdiv = false;
var crfstylesdiv = false;
var insertlinkstylesdiv = false;
var matstylesdiv = false;
var maedit = false;
var refedit = false;
$rsdiv = false;
var declareid = true;

var usname = "";
var userid = "11";
$file_source_path = "";
$newmathtype = "";

                 
//nagarajbabu added this for dynamic menu functionality - START         
                    
var $dfht; var submenu_temp;                   
var dynm_toolbar3,  dynm_toolbar4, dynm_toolbar5, dynm_toolbar6, dynm_toolbar7, dynm_toolbar8, dynm_toolbar9;
var mainmenu_arr,mainmenu_disp;
var menu_toolcnt=3;
var chk_submit_flag = 0;

//sankar
var contextmenu_disp = "";
var contextmnu_jsonData = '';

var domainData = '';
var domainjson = [];

//var mainmenu_arr=["Pre_Editing","Copy_Editing"];           
//var mainmenu_disp="Pre_Editing Copy_Editing";        
//dynm_toolbar3 ="PE_STEP1 PE_STEP2 Bib_Structure_New PE_STEP4";         
//dynm_toolbar4 ="UKUS BinomialCheck";             
//console.log(mainmenu_arr);              
//console.log(mainmenu_disp);   
                    
//nagarajbabu added this for dynamic menu functionality - END 

$.ajax({
    'async': false,
    'type': "POST",
    'global': false,
    'dataType': 'html',
    'url': base_url + 'home/username',
    'success': function (data) {

        usname = data;
    }
});

$.ajax({
    'async': false,
    'type': "POST",
    'global': false,
    'dataType': 'html',
    'url': base_url + 'home/file_source_path',
    'success': function (data) {

        $file_source_path = data;
    }
});
//$HOSTNAME = window.location.hostname;
$HOSTNAME = window.location.origin; 

$binlink = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/binomial.php";
$doiurl = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/doi.php";
$cstyle = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/Cstyles.php";
$enzlink = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/enzyme.php";
$figlink = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/figlist.php";
$shrthelp = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/help.php";
$insertlink = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/insertlink.php";
$latlink = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/latinterm.php";
$pdflink = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/pdfjs/web/viewer.php";
$error404link = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/404.php";
$pstyles = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/Pstyles.php";
$query = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/querylist.php";
$rstyle = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/Rstyles.php";
$RefManualStructure = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/ckeditor/index.php";
$RMS = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/REFEDITOR.php";
$REP = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/reference_form.php";
$refedit = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/REFEDIT.php";
$uncite = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/unciteref.php";
// $reflink = "http://192.168.0.4/Integra/EditPlus/ce_editor/Support/reflink.php";
$ustyle = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/ukus_style.php";
$binomial = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/binomialcheck.php";
$abbrstyle = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/abbr_check.php";
$CommentList = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/commentlist.php";
$hypstyle = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/hyphen.php";
$uncitecitation = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/uncitedcitation.php";
$MathEdit_URL = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/Math.php";
$gmrtyle = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/gmr_style.php";
$listquery = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/listquery.php";
$accession = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/accession.php";
$styleval = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/qcerror.php";
$qcreport = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/qcparsingreport.php";
$insertlink = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/insertlink.php";
$uncit = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/uncite.php";
//$url_open = "http://"+$HOSTNAME+"/Integra/EditPlus/ce_editor/Support/urlopen.php";
$spellcheck = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/spell-check.php";
$preprint = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/preprint.php";
$CEautomation = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/ce-automation.php";
$RefList = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/ref-list.php";
$VisualMathEditor = $HOSTNAME + "/Integra/EditPlus/ce_editor/VisualMathEditor/MathEditor.php?runLocal";
$MathJax_link = $HOSTNAME + "/Integra/MathJax-2.7.3/MathJax.js?config=TeX-AMS_HTML";
$track = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/Track.php";

//nagarajbabu added additional option 
$applystyles = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/applystyles.php";
$insertcustomlink = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/insertcustomlink.php";
$authorgroupform = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/author_form.php";
$affiliationform = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/affiliation_form.php";
$keywordsform = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/keywords_form.php";

//Mani.d added additional option 
$paginationPhp = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/pagination.php";
$suggestions = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/suggestions.php";
$insert_figure = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/Insert_Figure.php";
$insert_reference = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/Insert_Ref_Foot.php";
$ref_component = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/ref_component.php";
$pdfviewer = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/PDF_viewer.php";
$jobOptions = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/jobOptions.php";
$insSymbol = $HOSTNAME + "/Integra/EditPlus/ce_editor/assets/editor/tinymce4/js/tinymce/plugins/charmap/insSymbol.php";
$ins_author_grp = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/ins_author_grp.php";

//Marimuthu Pandian M added additional option 
$searchpanel = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/searchpanel.php";
$replacepanel = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/replacepanel.php";
$tablewidthcolumn = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/tablewidthcolumn.php";
$WirisMathEditor = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/WirisMathEditor.php";
$Styles = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/Styles.php";
$tochead = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/Toc.php";
$funders = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/Funders.php";
$domains = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/Domains.php";

//Sathish.K added additional option 
$Ref_Renumber = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/Ref_Renumber.php";
$Backmatterreorder = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/Backmatterreorder.php";
//$HOSTNAME_URL = "https://support.Integra.com/cup-am-workflow";

//$binlink = $HOSTNAME_URL + "/ce_editor/Support/binomial.php";
//$doiurl = $HOSTNAME_URL + "/ce_editor/Support/doi.php";
//$cstyle = $HOSTNAME_URL + "/ce_editor/Support/Cstyles.php";
//$enzlink = $HOSTNAME_URL + "/ce_editor/Support/enzyme.php";
//$figlink = $HOSTNAME_URL + "/ce_editor/Support/figlist.php";
//$shrthelp = $HOSTNAME_URL + "/ce_editor/Support/help.php";
//$insertlink = $HOSTNAME_URL + "/ce_editor/Support/insertlink.php";
//$latlink = $HOSTNAME_URL + "/ce_editor/Support/latinterm.php";
//$pdflink = $HOSTNAME_URL + "/ce_editor/Support/pdfjs/web/viewer.php";
//$error404link = $HOSTNAME_URL + "/ce_editor/Support/404.php";
//$pstyles = $HOSTNAME_URL + "/ce_editor/Support/Pstyles.php";
//$query = $HOSTNAME_URL + "/ce_editor/Support/querylist.php";
//$rstyle = $HOSTNAME_URL + "/ce_editor/Support/Rstyles.php";
//$RefManualStructure = $HOSTNAME_URL + "/ce_editor/Support/ckeditor/index.php";
//$RMS = $HOSTNAME_URL + "/ce_editor/Support/REFEDITOR.php";
//$uncite = $HOSTNAME_URL + "/ce_editor/Support/unciteref.php";
//// $reflink = "http://192.168.0.4/Integra/EditPlus/ce_editor/Support/reflink.php";
//$ustyle = $HOSTNAME_URL + "/ce_editor/Support/ukus_style.php";
//$binomial = $HOSTNAME_URL + "/ce_editor/Support/binomialcheck.php";
//$abbrstyle = $HOSTNAME_URL + "/ce_editor/Support/abbr_check.php";
//$CommentList = $HOSTNAME_URL + "/ce_editor/Support/commentlist.php";
//$hypstyle = $HOSTNAME_URL + "/ce_editor/Support/hyphen.php";
//$uncitecitation = $HOSTNAME_URL + "/ce_editor/Support/uncitedcitation.php";
//$MathEdit_URL = $HOSTNAME_URL + "/ce_editor/Support/Math.php";
//$gmrtyle = $HOSTNAME_URL + "/ce_editor/Support/gmr_style.php";
//$listquery = $HOSTNAME_URL + "/ce_editor/Support/listquery.php";
//$accession = $HOSTNAME_URL + "/ce_editor/Support/accession.php";
//$styleval = $HOSTNAME_URL + "/ce_editor/Support/qcerror.php";
//$qcreport = $HOSTNAME_URL + "/ce_editor/Support/qcparsingreport.php";
//$insertlink = $HOSTNAME_URL + "/ce_editor/Support/insertlink.php";
//$uncit = $HOSTNAME_URL + "/ce_editor/Support/uncite.php";
////$url_open = "http://"+$HOSTNAME+"/Integra/EditPlus/ce_editor/Support/urlopen.php";
//$spellcheck = $HOSTNAME_URL + "/ce_editor/Support/spell-check.php";
//$preprint = $HOSTNAME_URL + "/ce_editor/Support/preprint.php";
//$CEautomation = $HOSTNAME_URL + "/ce_editor/Support/ce-automation.php";
//$RefList = $HOSTNAME_URL + "/ce_editor/Support/ref-list.php";
//$VisualMathEditor = $HOSTNAME_URL + "/ce_editor/VisualMathEditor/MathEditor.php?runLocal";
//$MathJax_link = $HOSTNAME_URL + "/MathJax-2.7.3/MathJax.js?config=TeX-AMS_HTML";

$insert_inlinefigure = $HOSTNAME + "/Integra/EditPlus/ce_editor/Support/Insert_InlineFigure.php";

var stageId = '';
var linkType = '';

$(window).load(function ()
{
    /**
     * Disable Back Button in Browser
     */
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = function () {
        window.history.pushState(null, "", window.location.href);
    };

	
	//sankar    
    const urlParams = new URLSearchParams(window.location.search);
    stageId = urlParams.get('stage');
    usname = urlParams.get('username');
	linkType = urlParams.get('linktype');
    //sankar
    /**
     * To set content editable false for PRQC login
     */
    $.ajax({
        'async': false,
        'type': "POST",
        'global': false,
        'dataType': 'html',
        'url': base_url + 'home/getDepartment',
        'success': function (data) {
            if (data == "PRQC")
            {
                //tinymce.activeEditor.getBody().setAttribute('contenteditable', false);
            }
        }
    });


    updateEditStatus();
    function updateEditStatus()
    {
        $fn = window.location.pathname;
        $fn = $fn.replace(/(.*)(\/)(.*?)/g, '$3');
        //alert($fn);

        $.ajax({
            'async': false,
            'type': "POST",
            'global': false,
            'dataType': 'html',
            'url': base_url + 'home/updateeditstatus',
            data: {fn: $fn},
            'success': function (result) {
                //alert(data);
                if (result == 0)
                {
                    $(".mce-popupwindow").hide();
                    // tinyMCE.activeEditor.windowManager.alert("Error in document please contact Techsupport immediately!");	
                }
                setTimeout(function () {
                    updateEditStatus();
                }, 180000);

            }
        });
    }


    /**
     * TinyMCE to clear undo history for first loading  
     */
    tinymce.activeEditor.undoManager.clear();

    var ed = tinyMCE.activeEditor;
    /* alert($(location).attr('pathname')); */
    $.ajax({
        'async': false,
        'type': "POST",
        'global': false,
        'dataType': 'html',
        'url': base_url + 'home/HTML_Text',
        'success': function (data) {
            $rs = data;
            var content = ed.getContent();
            ed.setContent($rs);
			$(ed.getBody()).eq(0).css({"zoom":"100%"});
        }
    });

	
	$("div[role='toolbar']:nth-child(3)").fadeOut(0);
    $("div[role='toolbar']:nth-child(4)").fadeOut(0);
    $("div[role='toolbar']:nth-child(5)").fadeOut(0);
    $("div[role='toolbar']:nth-child(6)").fadeOut(0);
    $("div[role='toolbar']:nth-child(7)").fadeOut(0);
    $("div[role='toolbar']:nth-child(8)").fadeOut(0);
    $("div[role='toolbar']:nth-child(9)").fadeOut(0);
	$dfht = $(".mce-toolbar-grp").height();
	
	//sankar
    if (stageId) {
        var rgxstageinit = new RegExp("CORRECTION\\d+", "gi");
        var rslt_matcxinit = stageId.match(rgxstageinit);

        if (rslt_matcxinit) {
            $('.mce-ListQuerydiv').click();
            $('.mce-ListQuerydiv').click();
            $tlbarhgt = $(".mce-toolbar-grp").height() + 400;
            $('.RightSidePanel').css('height', $tlbarhgt + "px");
            calculatingView();
			
            $('div[aria-label="Spellcheck As You Type"]').trigger('click');
            $('div[aria-label="Spellcheck As You Type"]').attr('aria-pressed', 'true');
            $('div[aria-label="Spellcheck As You Type"]').addClass("mce-active"); 
           // $('.mce-RefEditor').hide();  
            // $('.mce-RefManager').hide();  
        }
    }
    //sankar

    $("button[role='presentation']").click(function ()
    {
        $tooltext = $(this).text();
        $tooltext = $.trim($tooltext);
		$("#mceu_114-body").css("white-space", "pre-line");
		$("div[role='toolbar']:nth-child(8)").find('.mce-btn').addClass('mce-Reviewitems');

        try {
            if ($(this)[0].parentNode.className.indexOf("mce-Reviewitems") > -1 || $(this)[0].parentNode.className.indexOf("mce-language") > -1) {
                return;
            }
        } catch (e) {

        }

        if ($tooltext === 'Integra')
        {

        } else if ($tooltext === "Auto Structure" || $tooltext === "Pre Structure" || $tooltext === "FM Structure" || $tooltext === "Bib Structure" || $tooltext === "Citations" || $tooltext === "DOI Insertion" || $tooltext === "CrossRef Validation" || $tooltext === "Binomial" || $tooltext === "Enzyme" || $tooltext === "LatinTerms" || $tooltext === "Generate LaTeX" || $tooltext === "Generate PDF" || $tooltext === "XML Conversion" || $tooltext === "XML Parser" || $tooltext === "XML Viewer" || $tooltext === "XML Creation" || $tooltext == "Generate XML" || $tooltext === "pdfviewer" || $tooltext === "Generate Latex" || $tooltext === "Generate Review PDF" || $tooltext === "Binomial Citation" || $tooltext === "Figure Citation" || $tooltext === "Apply AUGRP" || $tooltext === "Enzyme Citation" || $tooltext === "LatinTerms" || $tooltext === "Uncite Reference" || $tooltext === "Reference Citation" || $tooltext === "UK-US Speller" || $tooltext === "Content Validation" || $tooltext === "NUM 2 NAME" || $tooltext === "Binomial-Checker" || $tooltext === "Comment List" || $tooltext === "Abbrevation Checker" || $tooltext === "Hyphen-Checker" || $tooltext === "Style Check" || $tooltext === "Alphabetical Order" || $tooltext === "Queries" || $tooltext === "Insert Link" || $tooltext === "Uncite/Unlist" || $tooltext === "Move to 3B2" || $tooltext === "PM PMC DOI" || $tooltext === "Pre_Print PDF" || $tooltext === "GenerateXML" || $tooltext === "Query" || $tooltext === "QC Parsing Report" || $tooltext === "Proof PDF" || $tooltext === "Reference Manager" || $tooltext === "CE AUTOMATION" || $tooltext === "CEtrack" || $tooltext === "PDF/LateX" || $tooltext === "XML" || $tooltext === "CEautomation" || $tooltext === "RefList" || $tooltext === "mPDF" || $tooltext === "Xml" || $tooltext === "Html" ||
                $tooltext === "Download proof pdf" || $tooltext === "Download latex" || $tooltext === "Download docx" || $tooltext === "Download review docx" || $tooltext === "Download meta" || $tooltext === "Upload Files" || $tooltext === "Track PDF" || $tooltext === "No Track PDF" || $tooltext === "Package"
                )
        {

        } else
        {
            $hi = $(".mce-toolbar-grp").height();

            $("div[role='toolbar']:nth-child(1)").fadeIn(1000);
            $("div[role='toolbar']:nth-child(2)").fadeIn(1000);

            $("div[role='toolbar']:nth-child(3)").fadeOut(0);
            $("div[role='toolbar']:nth-child(4)").fadeOut(0);
            $("div[role='toolbar']:nth-child(5)").fadeOut(0);
            $("div[role='toolbar']:nth-child(6)").fadeOut(0);
            $("div[role='toolbar']:nth-child(7)").fadeOut(0);
            $("div[role='toolbar']:nth-child(8)").fadeOut(0);
            $("div[role='toolbar']:nth-child(9)").fadeOut(0);
            $hi = $(".mce-toolbar-grp").height();
            $(".mce-toolbar-grp").css({"height": $hi});
            //$(".mce-toolbar-grp").css({"height": $dfht});
        }
    });

    /**
     * To Enable Track Changes
     **/
    setTimeout(function ()
    {
        ed.execCommand('ice_togglechanges');
        // $("#example_ifr").css("height","-webkit-fill-available");

    }, 300);

    ////////////////////// Open PMID, PMCID, DOI in rightside panel///////////////

    openurl();
});


function insertcontent($inscode)
{
	var qs_stage=$('#temp_stage').val();
	var qs_username=$('#temp_username').val();
	var qs_userid=$('#temp_userid').val();
	
    var ed = tinyMCE.get('example');
    $trackstatus = false;
    $(".mce-active").each(function ()
    {
        if ($(this).attr('aria-label') === "Toggle Track Changes" || $(this).attr('aria-label') === "Toggle Track Changes ")
        {
            $trackstatus = true;
        }
    });
    $code = "";
    if ($trackstatus)
    {
        var selcn = ed.selection.getContent({format: 'html'});

        $insid = Math.floor(Math.random() * (100000 - 10000 + 1) + 10000);
        $insid1 = Math.floor(Math.random() * (100000 - 10000 + 1) + 10000);
        var objToday = new Date(),
                months = new Array('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'),
                curMonth = months[objToday.getMonth()],
                curYear = objToday.getFullYear(),
                curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
                curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
                curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
                curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
        var today = objToday.getDate() + "/" + curMonth + "/" + curYear + " " + curHour + ":" + curMinute + curMeridiem;
        $insid = $insid + "" + objToday.getSeconds();
        $insid1 = $insid1 + "" + objToday.getSeconds();

        if (selcn != '')
        {
            $code = "<del class='del cts-1' data-cid='" + $insid1 + "' data-userid='" + qs_userid + "' data-username='" + qs_username + "' data-time='" + $.now() + "' title='Inserted by " + qs_username + " - " + today + "'>" + selcn + "</del><ins class='ins cts-1' data-cid='" + $insid + "' data-userid='" + qs_userid + "' data-username='" + qs_username + "' data-time='" + $.now() + "' title='Inserted by " + qs_username + " - " + today + "'>" + String.fromCharCode($inscode) + "</ins>";
        } else
        {
            $code = "<ins class='ins cts-1' data-cid='" + $insid + "' data-userid='" + qs_userid + "' data-username='" + qs_username + "' data-time='" + $.now() + "' title='Inserted by " + qs_username + " - " + today + "'  data-stage='" + qs_username + "' >" + String.fromCharCode($inscode) + "</ins>";
        }
    } else
    {
        $code = String.fromCharCode($inscode);
    }
    ed.execCommand('mceInsertContent', true, $code);
}
function schema_err_click(rw, clmn)
{ 
//debugger;
    if(rw == 'QCCHECK' || rw == 'QCCHECKW')
    {
        var get_Element_Based_Attribute = tinyMCE.activeEditor.contentDocument.querySelector('[class="'+rw+'"][id="'+clmn+'"]');
        // get_Element_Based_Attribute.scrollIntoView(false);
        tinymce.activeEditor.focus();
        tinymce.activeEditor.selection.select(get_Element_Based_Attribute);
		tinymce.activeEditor.selection.scrollIntoView(get_Element_Based_Attribute);
    }
    else
    {
        var editor = ace.edit("editor"); 
	    editor.focus();
	    editor.gotoLine(parseInt(rw),parseInt(clmn),true);
    }
}
function triggerclick($text) {
    var i = "";
    $biid = "";
	
	$("button[role='presentation']").each(function (index) {
        if ($(this).parent().attr("aria-label") == "Special character" && $(this).parent().attr("aria-label") == $text)
        {
            $biid = $(this).parent().attr("id");
        } else {
            if ($(this).text() == $text)
            {
                $biid = $(this).parent().attr("id");
            }
        }
    });
	/*
    $("button[role='presentation']").each(function (index) {
        if ($(this).text() == $text)
        {
            $biid = $(this).parent().attr("id");
        }
    });
	*/
    $('#' + $biid).trigger('click');
}
function openurl()
{
    var ed = tinyMCE.get('example');
    var sel = tinyMCE.activeEditor.dom.select("span");

    $(sel).dblclick(function () {

        var selclass = $(this).attr("class");
        $url = "";
        $urlstatus = false;
        if (selclass == "PMID" || selclass == "PMCID" || selclass == "REFDOI")
        {
            var selecttxt = $(this).text();
            var selectcls = $(this).attr("class");
            var urlopen = "";
            if (selectcls == "PMID")
            {
                $urlstatus = true;
                var selecttxt = $(this).text();
                $url = "https://www.ncbi.nlm.nih.gov/pubmed/?term=" + selecttxt + "";
            } else if (selclass == "PMCID")
            {
                $urlstatus = true;
                var selecttxt = $(this).text();
                $url = "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC" + selecttxt;
            } else if (selclass == "REFDOI")
            {
                $urlstatus = false;
                var selecttxt = "";
                var selecthtml = $(this).html();
                selecttxt = selecthtml.replace(/<del([^>]*)>(.*?)<\/del>/g, "").replace(/<ins([^>]*)>/g, "").replace(/<\/ins>/g, "");
                window.open("https://doi.org/" + selecttxt, "DoiWindow", "top=300,left=500,width=600,height=600,resizable=no");
            }

            if ($url != undefined && $urlstatus)
            {
                jQuery(this).each(function () {
                    parent.tinymce.activeEditor.windowManager.close();
                });
                ed.windowManager.open({
                    title: 'Redirect to PUBMED Site',
                    url: $url,
                    buttons: [{
                            text: 'Cancel',
                            onclick: 'close'
                        }],
                    width: 600,
                    height: 480,
                });

            } else if ($url == "")
            {
                parent.tinymce.activeEditor.windowManager.close();
            }
        } else if (selclass == "ORCID")
        {
            $urlstatus = true;
            $url = $(this).find('.ORCIDTEXT').text();

            jQuery(this).each(function () {
                parent.tinymce.activeEditor.windowManager.close();
            });
            ed.windowManager.open({
                title: 'Redirect to ORCID Site',
                url: $url,
                buttons: [{
                        text: 'Cancel',
                        onclick: 'close'
                    }],
                width: 900,
                height: 450,
            });

        }
    });

}

function Insertcomment($val, $type, $dataid)
{

    tinyMCE.activeEditor.windowManager.close();	// Closing the active windowManager


    /**
     * Creating the comment insertion popup window
     */
    tinyMCE.activeEditor.windowManager.open({
        title: "Insert comment",
        //url: t + "/dialog.html?val1="+value1+"&val2="+value2+"",
        html: "<div id='comments'><textarea id='comment_textarea' style='background: white;width: 478px;height: 100px; margin: 10px;border: 1px solid;white-space: pre-line;font-size: 14px;'>" + $val + "</textarea></div>",
        width: 230,
        height: 130,
        buttons: [{
                text: "Ok",
                onclick: function () {

                    var content = tinyMCE.activeEditor.selection.getContent({
                        'format': 'html'
                    });

                    //var el = tinymce.activeEditor.dom.create('span', { 'class': 'QUERY'}, $("#comment_textarea").val());
                    //tinyMCE.activeEditor.execCommand('mceInsertContent', false, $("#comment_textarea").val());

                    if ($type === "old")
                    {

                        var dataspan = tinymce.activeEditor.dom.select('.AUTHOR-COMMENT');
                        $(dataspan).each(function ()
                        {
                            $dataspanid = $(this).attr("data-id");


                            if ($dataspanid != undefined && $dataspanid == $dataid) {

                                $(this).attr("data-comment", $("#comment_textarea").val());
								reinitialize_rightside_panel();
                                return false;
                            }
                        });
                        tinyMCE.activeEditor.windowManager.close();	// Closing the active windowManager
                    } else
                    {
						///sankar
                        tinyMCE.activeEditor.execCommand('mceInsertContent', false, content + tinyMCE.activeEditor.dom.createHTML('span', { 'class': 'AUTHOR-COMMENT', 'data-id': 'COMMENT' + $dataid, 'data-user': usname, 'data-stage': stageId, 'data-time': getCurrentTime(), 'data-comment': $("#comment_textarea").val() }));
                        tinyMCE.activeEditor.windowManager.close();
						reinitialize_rightside_panel();
						// Closing the active windowManager		
                    }
                }
            }, {
                text: "Close",
                onclick: "close"
            }, {
                text: "Remove",
                onclick: function () {
                    if ($type === "old")
                    {

                        var dataspan = tinymce.activeEditor.dom.select('.AUTHOR-COMMENT');
                        $(dataspan).each(function ()
                        {
                            $dataspanid = $(this).attr("data-id");


                            if ($dataspanid != undefined && $dataspanid == $dataid) {

                                $(this).remove();
								//sankar
                                reinitialize_rightside_panel();
                                return false;
                            }
                        });

                    } else
                    {
                    }
                    tinyMCE.activeEditor.windowManager.close();	// Closing the active windowManager
                }
            }],
        onOpen: function (e) {
            //$( '#comment_textarea' ).focus();
            $('#comment_textarea').focus().val('').val($val);
        }
    })

}
//hides the menu on click in same button
// function menuhide($type)
// {
    // var i = "";
	// $(tinyMCE.activeEditor.dom.select('span.uipag-active')).removeClass('uipag-active');
    // pagstyleid = '';
    // RightSideBarClose();
    // //add the text value in the array
    // var array = ["Paragraph Styles", "Character Styles", "Ref Styles", "Insertlink", "MathEditor", "Crossref-Connection", "RefManualStructure", "pdfviewer", "Figure Citation", "Binomial Citation", "Table Citation", "UK-US Speller", "Help F1", "Query", "LatinTerms", "Enzyme Citation", "RefEditor", "Uncite Reference", "Reference Citation", "NUM 2 NAME", "Binomial-Checker", "Comment List", "Style Check", "Abbrevation Checker", "Hyphen-Checker", "Alphabetical Order", "GMR", "Accession Link", "Queries", "Insert Link", "Uncite/Unlist", "XML","Generate MetaXML", "QC Parsing Report", "Pre_Print PDF", "Proof PDF", "PDF/XML", "CE AUTOMATION", "PDF/LateX", "Html","Xml","Download proof pdf","Download docx","Download meta","Download review docx","Download latex","pagination","Track PDF","No Track PDF","Package","Info_viewer","Styles","Toc", "JX Formatter PDF",  "PRINT PDF"];
    // $(".mce-active").each(function () {
        // $macactive = $(this).text();
        // for (i = 0; i < array.length; i++) {
            // if ($type != $macactive)
            // {
                // if ($macactive == array[i])
                // {
                    // $rsdiv = true;
                    // $(this).removeClass("mce-active");
                    // $(this).attr('aria-pressed', 'false');
                    // $(".RightSidePanel").remove();
                    // $rsdiv = false;
                // }
            // }
        // }
    // });
// }
function menuhide($type) {
	if($type!='Generate XML'){
		$('.ValidatorSidePanel').append('<div class="ValidatorScreenLock"></div>');  
	}
    var i = "";
    $(tinyMCE.activeEditor.dom.select('span.uipag-active')).removeClass('uipag-active');
    $(tinyMCE.activeEditor.dom.doc).find('span.findhit').contents().unwrap();
    pagstyleid = '';

    $(".mce-active").attr('aria-pressed', 'false');
    $(".mce-active").removeClass("mce-active");

    $(".RightSidePanel").remove();
    $rsdiv = false;
    if (leftsideview) {
        $('#example_ifr').css('width', '100%');
        $('#example_ifr').css('margin-left', '0%');
        $('#example_ifr').css('padding-left', '5px');
    } else {
        $('#example_ifr').css('width', '100%');
    }
    // Add by mani.d
    $("div[aria-label='Toggle Track Changes ']").attr('aria-pressed', 'true');
    $("div[aria-label='Toggle Track Changes ']").addClass("mce-active");
    $("div[aria-label='Show/Hide Track Changes']").attr('aria-pressed', 'true');
    $("div[aria-label='Show/Hide Track Changes']").addClass("mce-active");
    // Add by mani.d
    if ($('.contentTypeWrapper').length > 0) {
        $('.mce-paragraphstyles').click();
        $('.mce-paragraphstyles').click();
    }
    setTimeout(function () { calculatingView() }, 500)
}

function calculatingView()
{
		var leftPanelWidth = 0;
		if(!!$('.contentTypeWrapper').length && $('.RightSidePanel').length == 0){
			leftPanelWidth = -0.5;
	}
	else if(!!$('.contentTypeWrapper').length && !!$('.RightSidePanel').length){
		leftPanelWidth = Math.round(($('.contentTypeWrapper').width() / $("#example_ifr").parent().width())*100);
		
	}
	
	var rightPanelWidth = Math.round(($('.RightSidePanel').width() / $("#example_ifr").parent().width())*100);
	var centerEditorWidth = 99.5-leftPanelWidth-rightPanelWidth;
	$('#example_ifr').css('width', centerEditorWidth+'%');
	
	
	
	if($('.contentTypeWrapper').length == 0){
		$('#refreshParastyle').remove();
	}
	else if(!!$('.contentTypeWrapper').length){
	$('#refreshParastyle').click();	
	}
}
//declares id for cursor point and enables click of rightside panel 
function declare_id()
{
    /// To remove data-eid attribute if already exists //////
    /// First checking with para elements ///
    $eidstatus = false;
    var ed = tinyMCE.activeEditor;
    var refpara = tinymce.activeEditor.dom.select('p');
    $(refpara).each(function ()
    {
        var refeditattr = $(this).attr("data-eid");
        if (refeditattr != undefined && refeditattr == "edit")
        {
            $(this).removeAttr("data-eid");
            $eidstatus = true;
        }
    });

    /// If not Exists in para the checking with div elements ///
    if (!$eidstatus)
    {
        var refpara = tinymce.activeEditor.dom.select('div');
        $(refpara).each(function ()
        {
            var refeditattr = $(this).attr("data-eid");
            if (refeditattr != undefined && refeditattr == "edit")
            {
                $(this).removeAttr("data-eid");
                $eidstatus = true;
            }
        });
    }

    /// If not Exists in div elements then checking with H1 elements ///
    if (!$eidstatus)
    {
        var refpara = tinymce.activeEditor.dom.select('H1');
        $(refpara).each(function ()
        {
            var refeditattr = $(this).attr("data-eid");
            if (refeditattr != undefined && refeditattr == "edit")
            {
                $(this).removeAttr("data-eid");
                $eidstatus = true;
            }
        });
    }

    /// If not Exists in H1 then checking with H2 elements ///
    if (!$eidstatus)
    {
        var refpara = tinymce.activeEditor.dom.select('H2');
        $(refpara).each(function ()
        {
            var refeditattr = $(this).attr("data-eid");
            if (refeditattr != undefined && refeditattr == "edit")
            {
                $(this).removeAttr("data-eid");
                $eidstatus = true;
            }
        });
    }

    /// If not Exists in H2 then checking with H3 elements ///
    if (!$eidstatus)
    {
        var refpara = tinymce.activeEditor.dom.select('H3');
        $(refpara).each(function ()
        {
            var refeditattr = $(this).attr("data-eid");
            if (refeditattr != undefined && refeditattr == "edit")
            {
                $(this).removeAttr("data-eid");
                $eidstatus = true;
            }
        });
    }

    /// If not Exists in H3 then checking with H4 elements ///
    if (!$eidstatus)
    {
        var refpara = tinymce.activeEditor.dom.select('H4');
        $(refpara).each(function ()
        {
            var refeditattr = $(this).attr("data-eid");
            if (refeditattr != undefined && refeditattr == "edit")
            {
                $(this).removeAttr("data-eid");
                $eidstatus = true;
            }
        });
    }

    /// If not Exists in H4 the checking with H5 elements ///
    if (!$eidstatus)
    {
        var refpara = tinymce.activeEditor.dom.select('H5');
        $(refpara).each(function ()
        {
            var refeditattr = $(this).attr("data-eid");
            if (refeditattr != undefined && refeditattr == "edit")
            {
                $(this).removeAttr("data-eid");
                $eidstatus = true;
            }
        });
    }

    /// If not Exists in H5 the checking with H6 elements ///
    if (!$eidstatus)
    {
        var refpara = tinymce.activeEditor.dom.select('div');
        $(refpara).each(function ()
        {
            var refeditattr = $(this).attr("data-eid");
            if (refeditattr != undefined && refeditattr == "edit")
            {
                $(this).removeAttr("data-eid");
                $eidstatus = true;
            }
        });
    }

    //// Adding the data-eid attribute for current selection parent element ///
    var element = ed.dom.getParent(ed.selection.getNode(), 'p');
    if (element != null)
    {
        element.setAttribute("data-eid", "edit");
    } else
    {
        var element = ed.dom.getParent(ed.selection.getNode(), 'div');
        if (element != null)
        {
            element.setAttribute("data-eid", "edit");
        } else
        {
            var element = ed.dom.getParent(ed.selection.getNode(), 'H1');
            if (element != null)
            {
                element.setAttribute("data-eid", "edit");
            } else
            {
                var element = ed.dom.getParent(ed.selection.getNode(), 'H2');
                if (element != null)
                {
                    element.setAttribute("data-eid", "edit");
                } else
                {
                    var element = ed.dom.getParent(ed.selection.getNode(), 'H3');
                    if (element != null)
                    {
                        element.setAttribute("data-eid", "edit");
                    } else
                    {
                        var element = ed.dom.getParent(ed.selection.getNode(), 'H4');
                        if (element != null)
                        {
                            element.setAttribute("data-eid", "edit");
                        } else
                        {
                            var element = ed.dom.getParent(ed.selection.getNode(), 'H5');
                            if (element != null)
                            {
                                element.setAttribute("data-eid", "edit");
                            } else
                            {
                                var element = ed.dom.getParent(ed.selection.getNode(), 'H6');
                                if (element != null)
                                {
                                    element.setAttribute("data-eid", "edit");
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
//focuses on click after declare_id()
function focus_cnt()
{
    /// To remove data-eid attribute if already exists //////
    $eidstatus = false;
    /// First checking with para elements ///
    var refpara = tinymce.activeEditor.dom.select('p');
    $(refpara).each(function ()
    {
        var refeditattr = $(this).attr("data-eid");
        if (refeditattr != undefined && refeditattr == "edit")
        {
            $eidstatus = true;
            var edimg = tinyMCE.get('example');
            $(this)[0].scrollIntoView({block: "start", inline: "nearest"});
            edimg.focus();
            $(this).removeAttr("data-eid");
            return false;
        }
    });

    /// If not Exists in para the checking with div elements ///
    if (!$eidstatus)
    {
        var refpara = tinymce.activeEditor.dom.select('div');
        $(refpara).each(function ()
        {
            var refeditattr = $(this).attr("data-eid");
            if (refeditattr != undefined && refeditattr == "edit")
            {
                $eidstatus = true;
                var edimg = tinyMCE.get('example');
                $(this)[0].scrollIntoView({block: "start", inline: "nearest"});
                edimg.focus();
                $(this).removeAttr("data-eid");
                return false;
            }
        });
    }

    /// If not Exists in Div the checking with H1 elements ///
    if (!$eidstatus)
    {
        var refpara = tinymce.activeEditor.dom.select('H1');
        $(refpara).each(function ()
        {
            var refeditattr = $(this).attr("data-eid");
            if (refeditattr != undefined && refeditattr == "edit")
            {
                $eidstatus = true;
                var edimg = tinyMCE.get('example');
                $(this)[0].scrollIntoView({block: "start", inline: "nearest"});
                edimg.focus();
                $(this).removeAttr("data-eid");
                return false;
            }
        });
    }

    /// If not Exists in H1 the checking with H2 elements ///
    if (!$eidstatus)
    {
        var refpara = tinymce.activeEditor.dom.select('H2');
        $(refpara).each(function ()
        {
            var refeditattr = $(this).attr("data-eid");
            if (refeditattr != undefined && refeditattr == "edit")
            {
                $eidstatus = true;
                var edimg = tinyMCE.get('example');
                $(this)[0].scrollIntoView({block: "start", inline: "nearest"});
                edimg.focus();
                $(this).removeAttr("data-eid");
                return false;
            }
        });
    }

    /// If not Exists in H2 the checking with H3 elements ///
    if (!$eidstatus)
    {
        var refpara = tinymce.activeEditor.dom.select('H3');
        $(refpara).each(function ()
        {
            var refeditattr = $(this).attr("data-eid");
            if (refeditattr != undefined && refeditattr == "edit")
            {
                $eidstatus = true;
                var edimg = tinyMCE.get('example');
                $(this)[0].scrollIntoView({block: "start", inline: "nearest"});
                edimg.focus();
                $(this).removeAttr("data-eid");
                return false;
            }
        });
    }

    /// If not Exists in H3 the checking with H4 elements ///
    if (!$eidstatus)
    {
        var refpara = tinymce.activeEditor.dom.select('H4');
        $(refpara).each(function ()
        {
            var refeditattr = $(this).attr("data-eid");
            if (refeditattr != undefined && refeditattr == "edit")
            {
                $eidstatus = true;
                var edimg = tinyMCE.get('example');
                $(this)[0].scrollIntoView({block: "start", inline: "nearest"});
                edimg.focus();
                $(this).removeAttr("data-eid");
                return false;
            }
        });
    }

    /// If not Exists in H4 the checking with H5 elements ///
    if (!$eidstatus)
    {
        var refpara = tinymce.activeEditor.dom.select('H5');
        $(refpara).each(function ()
        {
            var refeditattr = $(this).attr("data-eid");
            if (refeditattr != undefined && refeditattr == "edit")
            {
                $eidstatus = true;
                var edimg = tinyMCE.get('example');
                $(this)[0].scrollIntoView({block: "start", inline: "nearest"});
                edimg.focus();
                $(this).removeAttr("data-eid");
                return false;
            }
        });
    }

    /// If not Exists in H5 the checking with H6 elements ///
    if (!$eidstatus)
    {
        var refpara = tinymce.activeEditor.dom.select('H6');
        $(refpara).each(function ()
        {
            var refeditattr = $(this).attr("data-eid");
            if (refeditattr != undefined && refeditattr == "edit")
            {
                $eidstatus = true;
                var edimg = tinyMCE.get('example');
                $(this)[0].scrollIntoView({block: "start", inline: "nearest"});
                edimg.focus();
                $(this).removeAttr("data-eid");
                return false;
            }
        });
    }

}
//removes the focus from editor on click
function focus_cnt_nremove()
{
    /// To remove data-eid attribute if already exists //////
    $eidstatus = false;
    /// First checking with para elements ///
    var refpara = tinymce.activeEditor.dom.select('p');
    $(refpara).each(function ()
    {
        var refeditattr = $(this).attr("data-eid");
        if (refeditattr != undefined && refeditattr == "edit")
        {
            $eidstatus = true;
            var edimg = tinyMCE.get('example');
            $(this)[0].scrollIntoView({block: "start", inline: "nearest"});
            edimg.focus();
            return false;
        }
    });

    /// If not Exists in para the checking with div elements ///
    if (!$eidstatus)
    {
        var refpara = tinymce.activeEditor.dom.select('div');
        $(refpara).each(function ()
        {
            var refeditattr = $(this).attr("data-eid");
            if (refeditattr != undefined && refeditattr == "edit")
            {
                $eidstatus = true;
                var edimg = tinyMCE.get('example');
                $(this)[0].scrollIntoView({block: "start", inline: "nearest"});
                edimg.focus();
                return false;
            }
        });
    }

    /// If not Exists in div the checking with H1 elements ///
    if (!$eidstatus)
    {
        var refpara = tinymce.activeEditor.dom.select('H1');
        $(refpara).each(function ()
        {
            var refeditattr = $(this).attr("data-eid");
            if (refeditattr != undefined && refeditattr == "edit")
            {
                $eidstatus = true;
                var edimg = tinyMCE.get('example');
                $(this)[0].scrollIntoView({block: "start", inline: "nearest"});
                edimg.focus();
                return false;
            }
        });
    }

    /// If not Exists in H1 the checking with H2 elements ///
    if (!$eidstatus)
    {
        var refpara = tinymce.activeEditor.dom.select('H2');
        $(refpara).each(function ()
        {
            var refeditattr = $(this).attr("data-eid");
            if (refeditattr != undefined && refeditattr == "edit")
            {
                $eidstatus = true;
                var edimg = tinyMCE.get('example');
                $(this)[0].scrollIntoView({block: "start", inline: "nearest"});
                edimg.focus();
                return false;
            }
        });
    }

    /// If not Exists in H2 the checking with H3 elements ///
    if (!$eidstatus)
    {
        var refpara = tinymce.activeEditor.dom.select('H3');
        $(refpara).each(function ()
        {
            var refeditattr = $(this).attr("data-eid");
            if (refeditattr != undefined && refeditattr == "edit")
            {
                $eidstatus = true;
                var edimg = tinyMCE.get('example');
                $(this)[0].scrollIntoView({block: "start", inline: "nearest"});
                edimg.focus();
                return false;
            }
        });
    }

    /// If not Exists in H3 the checking with H4 elements ///
    if (!$eidstatus)
    {
        var refpara = tinymce.activeEditor.dom.select('H4');
        $(refpara).each(function ()
        {
            var refeditattr = $(this).attr("data-eid");
            if (refeditattr != undefined && refeditattr == "edit")
            {
                $eidstatus = true;
                var edimg = tinyMCE.get('example');
                $(this)[0].scrollIntoView({block: "start", inline: "nearest"});
                edimg.focus();
                return false;
            }
        });
    }

    /// If not Exists in H4 the checking with H5 elements ///
    if (!$eidstatus)
    {
        var refpara = tinymce.activeEditor.dom.select('H5');
        $(refpara).each(function ()
        {
            var refeditattr = $(this).attr("data-eid");
            if (refeditattr != undefined && refeditattr == "edit")
            {
                $eidstatus = true;
                var edimg = tinyMCE.get('example');
                $(this)[0].scrollIntoView({block: "start", inline: "nearest"});
                edimg.focus();
                return false;
            }
        });
    }

    /// If not Exists in H5 the checking with H6 elements ///
    if (!$eidstatus)
    {
        var refpara = tinymce.activeEditor.dom.select('H6');
        $(refpara).each(function ()
        {
            var refeditattr = $(this).attr("data-eid");
            if (refeditattr != undefined && refeditattr == "edit")
            {
                $eidstatus = true;
                var edimg = tinyMCE.get('example');
                $(this)[0].scrollIntoView({block: "start", inline: "nearest"});
                edimg.focus();
                return false;
            }
        });
    }
}
// alex function

function ShortCutstyles_PHPLoad(buttonName, stylePart){
	$('#shortCutLoadFile').remove();
	$('#example_ifr').parent().append("<div id='shortCutLoadFile' style='display: none;'></div>");
	let qchtmlst = "";
	let parserhtml = "";
	let parserxml = "";
	let parser_xml = "";
	$("#shortCutLoadFile").load($Styles, { HOSTNAME: $HOSTNAME, filepath: qchtmlst, qstatus: qchtmlst, parserpath: parserhtml, xmlpath: parserxml, xml_path: parser_xml },				
	function () { 		
		Apply_user_style(buttonName, stylePart);
	});
}

function backmatterreorder()
{
	var gettag = tinyMCE.activeEditor.selection.dom.getParent(tinyMCE.activeEditor.selection.getNode(),"div[class='back']").outerHTML;			
	
	$('#example_ifr').css('width', '100%');
	$('.RightSidePanel').remove();
	$('#pstyleslist').remove();
	$('#example_ifr').parent().append("<div id='pstyleslist' style='width:28%'></div> ");
	$("#pstyleslist").load($Backmatterreorder, {
		HOSTNAME: $HOSTNAME,
		COPYTAG: gettag
	},				
	function () { 		
		jQuery('.loader').hide();
	});				
}

// Mani.D Function Start

function removeElementUsingClass(WholeElement, removeElementClass)
{
    let elementAdded = document.createElement('div');
    $(elementAdded).addClass("outerframe");
    $(elementAdded).html(WholeElement);
    
    $(elementAdded).children('.'+removeElementClass).each(function () {
        var $this = $(this);
        $($this).before($this.html());
        $($this).remove();											
    });

    return elementAdded;
}

function splitButton_JxFormatter(Difference)
{
    let custom_file_name = "JX_Formatter_PDF";
    if(Difference === "Direct_JXFormatterPDF") {
        jQuery('.loader').show();
        currentFileSave();
        $.ajax({		
            url: base_url + "home/get_pdf_from_ahsvr_API/",	
            method     : 'POST',
            dataType   : 'json',
            data       : {argument_number: "210", jobOptions: ""},
            success: function(response){
                if(response.success == 200){
                    $.ajax({
                        type: 'post',
                        url: base_url + "home/check_download_file_exist/" + custom_file_name + "/_Direct.pdf",
                        data: {},
                        success: function (response) {
                            if(response == "success") {
                                let exist_file_path = $('#exist_file_path').val().split('/');
                                let file_name = exist_file_path[9].replace(/\.[^/.]+$/, "");
								rightSidePanelOpen("", $pdfviewer, {HOSTNAME: $HOSTNAME, PUB_NAME: exist_file_path[6], JUR_NAME: exist_file_path[7], JOB_NO: exist_file_path[8], FILE_NAME: file_name + "_Direct", DIFFERENCE: "JX_Formatter_PDF", VALIDATIONREPORT: ""}, "50", "49");
                            }
                            else {
                                alert("Sorry this file not exist!..");
                                menuhide();
                            }
                        }
                    });
                }
                else if(response.error == 101){
                    alert(response.error_message);
                    menuhide();
                }
                else{
                    alert("Something went wrong, please check with support team.");
                    menuhide();
                }
                
                jQuery('.loader').hide(); 		
            }		
        });
    }
    else {
        rightSidePanelOpen("JX Formatter PDF", $jobOptions, {HOSTNAME: $HOSTNAME, DIFFERENCE: "JX_Formatter_PDF", CUSTOM_FILE_NAME: custom_file_name, HOME_FUNC_NAME: "get_pdf_from_ahsvr_API", PERL_ARG: "210"}, "75", "22");
    }
}

function currentFileSave()
{
	var edit = tinyMCE.get('example');
	
	var aed = tinyMCE.activeEditor;
    $(aed.dom.select('.QCCHECKHIDE')).addClass("QCCHECK");
    $(aed.dom.select('.QCCHECKWHIDE')).addClass("QCCHECKW");

    $(aed.dom.select('.QCCHECK')).removeClass("QCCHECKHIDE");
    $(aed.dom.select('.QCCHECKW')).removeClass("QCCHECKWHIDE");

	var exist_file_id = $('#exist_file_id').val();
	var exist_file_name = $('#exist_file_name').val();
	var exist_file_path = $('#exist_file_path').val();

	$.ajax({
		url: base_url + 'home/exist_save_file',
		type: 'POST', //exist_file_id:exist_file_id,
		data: {
			exist_file_id:exist_file_id,
			exist_file_name: exist_file_name,
			exist_file_path: exist_file_path,
			text: edit.getContent()
		},
		success: function (result) {}
	});
}

function insertFootNote()
{
    jQuery('.loader').show();
    $('#example_ifr').css('width', '100%');
    $('.RightSidePanel').remove();
    $('#pstyleslist').remove();
    $('#example_ifr').parent().append("<div id='pstyleslist' style='width:28%'></div> ");
    
    $("#pstyleslist").load($insert_reference, {
        HOSTNAME: $HOSTNAME,
        DIFFERENCE: "fn-block"
    },				
    function () { 		
        jQuery('.loader').hide();
    });
}

function deleteFootNote()
{
    var ed = tinyMCE.activeEditor;
    ed.setProgressState(1);
    var elementtxt = ed.dom.getParent(ed.selection.getNode(), 'div.footnote');
    if (elementtxt == null)
    {
        tinymce.activeEditor.windowManager.alert("Please click once in footnote then delete it!");
        ed.setProgressState(0);
    } else
    {
        var attrid = $(elementtxt).attr("id");
        $content = "";
        if (attrid == undefined || attrid == null || attrid == "undefined")
        {
            $content = "Do you want Delete this Footnote?";
        } else
        {
            $refid = attrid.replace("footnote", "");
            $content = "Do you want Delete Footnote-" + $refid + "?";
        }

        // alert($content);

        // Displays an confirm box and an alert message will be displayed depending on what you choose in the confirm
        tinymce.activeEditor.windowManager.confirm($content, function (s)
        {
            if (s)
            {
                // debugger;
                var nextelement = $(elementtxt).nextAll();
                // var reference_Div_tag = tinyMCE.activeEditor.dom.getParent(elementtxt, 'div.references');
                if (attrid != undefined || attrid != null)
                {
                    var get_Cite_SelectedElement = $(ed.contentDocument.body).find("a[href$='#"+attrid+"']");
                    if (get_Cite_SelectedElement != 0)
                    {
                        for(var gcse = 0;gcse<get_Cite_SelectedElement.length;gcse++)
                        {
                            get_Cite_SelectedElement[gcse].remove();
                        }
                        elementtxt.remove();
                    } else
                    {
                        elementtxt.remove();
                    }
                } else
                {
                    elementtxt.remove();
                }
                var delete_Track_Renumbering = [];
                for(var ne = 0; ne<nextelement.length; ne++)
                {
                    delete_Track_Renumbering = renumber_ref(nextelement[ne], 'delete', delete_Track_Renumbering, "footnote");
                }
                $.ajax({
                    'async': false,
                    'type': "POST",
                    'global': false,
                    'dataType': 'html',
                    'url': base_url + 'home/create_Log_for_Renumbering',
                    data:{seq_Change_Start: delete_Track_Renumbering[0], seq_Change_End: delete_Track_Renumbering[delete_Track_Renumbering.length-1], insert_Delete_number: $refid, Difference:"Footnote", operation:'Delete'},
                    success: function (result) {
                        
                    }
                });
                tinymce.activeEditor.windowManager.alert("Footnote-" + $refid + " is deleted.");
            }

        });
        ed.setProgressState(0);
    }
}

function renumber_ref(childNode, cmd, arrayOfRenumbered, R_text)
{
	var node_id = childNode.getAttribute('id');
    if(node_id != null)
    {
        var get_Number_ref = node_id.replace(R_text,'');
        if(cmd == 'insert')
            var changeNumber = String(parseInt(get_Number_ref)+1);
        else if(cmd == 'delete')
            var changeNumber = String(parseInt(get_Number_ref)-1);
        childNode.setAttribute('id',R_text+changeNumber);
        citation_change_renumber(node_id, changeNumber, R_text);
        arrayOfRenumbered.push(get_Number_ref);
    }
    return arrayOfRenumbered;
}

function citation_change_renumber(childID, CNumber, cR_text)
{
	var get_all_Citation_Id = $(tinyMCE.activeEditor.contentDocument.body).find("a[href$='#"+childID+"']");
	for(var gaci=0; gaci<get_all_Citation_Id.length; gaci++)
	{
		var get_href = get_all_Citation_Id[gaci].getAttribute('href');
        var re = new RegExp('#'+cR_text+'\\d+',"g");
        var new_href = get_href.replace(re, '#' + cR_text + CNumber);
		// var new_href = get_href.replace(/#bib\d+/g, '#' + R_text + CNumber);
		get_all_Citation_Id[gaci].setAttribute('href', new_href);
		get_all_Citation_Id[gaci].dataset.mceHref = new_href;
        if(cR_text == "bib")
        {
            let get_Text = get_all_Citation_Id[gaci].innerHTML;
            let patternForNumber = /^\d{1,3}(?!\d)/;
            if(patternForNumber.test(get_Text))
            {
                get_all_Citation_Id[gaci].innerHTML = CNumber;
            }
        }
        else{
            get_all_Citation_Id[gaci].innerHTML = CNumber;
        }
	}
}

function rightSidePanelOpen(buttonName, phpViewerFile, fileViewerArgument, editorWidth, rightPanelWidth)
{
    if(buttonName != "")
        menuhide(buttonName);

    jQuery('.loader').show();
    
    setTimeout(function () {
        $rsdiv = true;
        rightsideview = true;
        $('#example_ifr').parent().addClass("padding-rightbody");
        $('.RightSidePanel').remove();
        $('#example_ifr').parent().append("<div class='RightSidePanel' style='width:" + rightPanelWidth + "%'><div id='pstyleslist' style='width:" + String(parseInt(rightPanelWidth) - 1) + "%'></div></div>");

        $("#pstyleslist").load(phpViewerFile, fileViewerArgument
        , function () {
        });
        
        if (leftsideview)
        {
            $('#example_ifr').css('width', String(parseInt(editorWidth) - 10) + '%');
            $('#example_ifr').css('margin-left', '8%');
            $('#example_ifr').css('padding-left', '5px');
        } else
        {
            $('#example_ifr').css('width', editorWidth + '%');
        }
        var div_id = $('#example_ifr').parent().attr('id');
        var iframe_h = $('#example_ifr').height();
        var body_div = $('#' + div_id).height();
        var prev_elem = $('#' + div_id).prev().height();
        var prev_elem1 = $('#' + div_id).prev().prev().height();
        var total_height = parseInt(prev_elem) + parseInt(prev_elem1) + parseInt(8);
        $('.RightSidePanel').css('top', total_height + 'px');
        $('.RightSidePanel').css('height', iframe_h);
        // $('.RightSidePanel').css('width','355px');

        $(".loader").hide();
    }, 300);
}

function removeAttribute_for_align(element, attributeNames)
{
    for (let attributeName in attributeNames) {
        
        if(attributeName == "style"){
            element.style.removeProperty(attributeNames[attributeName]);
            let getStyleAttr_value = element.getAttribute(attributeName);
            element.setAttribute('data-mce-style', getStyleAttr_value);
        }
        else{
            element.removeAttribute(attributeName);
        }
    }
}

// Mani.D Function End

function refreshParastyleFunction() {
    $('.contentHeadWrapper').html('');
    $('#refreshParastyle').show();
    var myStringArray = getNodeList(tinyMCE.activeEditor.getBody());
    //console.log(myStringArray);
    $('.contentHeadWrapper').html(myStringArray);
    var scroll = tinymce.DOM.getViewPort(tinymce.activeEditor.getWin()).y;
    $(".contentTypeWrapper").scrollTop(scroll);
//console.log('style:'+tinyMCE.activeEditor.getBody().style.zoom);
//console.log('zoom:'+$('.mce-zoomselect').find('.mce-txt').text());
    $('.contentHeadWrapper').css('zoom', $('.mce-zoomselect').find('.mce-txt').text());
//$('.contentHeadWrapper').css('zoom',tinyMCE.activeEditor.getBody().style.zoom);
    function getNodeList(elem) {
        var l = new Array(elem), c = 1, ret = new Array(), para = '';

        for (var r = 0; r < c; r++) {
            for (var z = 0; z < l[r].childNodes.length; z++) {

                if (l[r].childNodes[z].nodeName == 'P' || l[r].childNodes[z].nodeName == 'DIV' || l[r].childNodes[z].nodeName == 'H1' || l[r].childNodes[z].nodeName == 'H2' || l[r].childNodes[z].nodeName == 'H3' || l[r].childNodes[z].nodeName == 'H4' || l[r].childNodes[z].nodeName == 'H5' || l[r].childNodes[z].nodeName == 'H6' || l[r].childNodes[z].nodeName == 'OL' || l[r].childNodes[z].nodeName == 'UL') {
                    if (l[r].childNodes[z].parentElement.nodeName != 'TD') {
                        ret.push(l[r].childNodes[z]);
                        if (l[r].childNodes[z].nodeName != 'DIV') {
                            /* alert(l[r].childNodes[z].className);
                             alert(l[r].childNodes[z].offsetTop); */
                            if (l[r].childNodes[z].nodeName == "OL" || l[r].childNodes[z].nodeName == "UL")
                            {
                                para += "<p style='position:absolute;top:" + l[r].childNodes[z].offsetTop + "px'>" + l[r].childNodes[z].className + " List </p>";
                            } else
                            {
                                para += "<p style='position:absolute;top:" + l[r].childNodes[z].offsetTop + "px'>" + l[r].childNodes[z].className + "</p>";
                            }
                        } else {
                            //console.log(l[r].childNodes[z]);
                            if (l[r].childNodes[z].className == "body")
                            {
                            } else if (l[r].childNodes[z].className == "front")
                            {
                                /* alert(l[r].childNodes[z].position);
                                 alert(l[r].childNodes[z].offsetTop); */
                                var o_t = l[r].childNodes[z].offsetTop - 15;
                                var h_t = parseInt(l[r].childNodes[z].offsetTop) + parseInt(l[r].childNodes[z].clientHeight) - 15;
                                para += "<p style='position:absolute;top:" + o_t + "px;font-weight:bold;color:green;'>" + l[r].childNodes[z].className + "</p>";
                                // para+="<p style='position:absolute;top:"+h_t+"px;font-weight:bold;color:green;'>"+l[r].childNodes[z].className+" End</p>";

                            } else if (l[r].childNodes[z].className == "back")
                            {
                                var o_t = l[r].childNodes[z].offsetTop - 15;
                                var h_t = parseInt(l[r].childNodes[z].offsetTop) + parseInt(l[r].childNodes[z].clientHeight) - 20;
                                para += "<p style='position:absolute;top:" + o_t + "px;font-weight:bold;color:green;'>" + l[r].childNodes[z].className + "</p>";
                                // para+="<p style='position:absolute;top:"+h_t+"px;font-weight:bold;color:green;'>"+l[r].childNodes[z].className+" End</p>";

                            } else
                            {
                                var o_t = l[r].childNodes[z].offsetTop - 15;
                                var h_t = parseInt(l[r].childNodes[z].offsetTop) + parseInt(l[r].childNodes[z].clientHeight) - 30;
                                para += "<p style='position:absolute;top:" + o_t + "px;font-weight:bold;color:green;'>" + l[r].childNodes[z].className + "</p>";
                                // para+="<p style='position:absolute;top:"+h_t+"px;font-weight:bold;color:green;'>"+l[r].childNodes[z].className+" End</p>";

                            }
                        }
                    }

                }

                if (l[r].childNodes[z].childNodes[0]) {

                    l.push(l[r].childNodes[z]);
                    c++;

                }
                //}      
            }
        }
        para += "<p name='last' style='position:absolute;top:" + tinyMCE.activeEditor.getBody().clientHeight + "px'>______________</p>";
        return para;
        //console.log(para);
    }
}

function refpstylesUnstructur($refpstylestext, $refpstylesval)
{
    var ed = tinyMCE.get('example');
    var element = ed.selection.getNode();
    if (element.nodeName == 'SPAN')
    {
        b = element.parentNode;
        while (b)
        {
            if (b.nodeName == 'P' || b.nodeName == 'H1' || b.nodeName == 'H2' || b.nodeName == 'H3' || b.nodeName == 'H4' || b.nodeName == 'H5' || b.nodeName == 'H6')
            {
                element = b;
                break;
            } else
            {
                b = b.parentNode;
            }
        }
    }
    if (element.nodeName == 'SPAN')
    {
        b = element.parentNode;
        while (b)
        {
            if (b.nodeName == 'P' || b.nodeName == 'H1' || b.nodeName == 'H2' || b.nodeName == 'H3' || b.nodeName == 'H4' || b.nodeName == 'H5' || b.nodeName == 'H6')
            {
                element = b;
                break;
            } else
            {
                b = b.parentNode;
            }
        }
    }
    if (element.nodeName == 'SPAN')
    {
        b = element.parentNode;
        while (b)
        {
            if (b.nodeName == 'P' || b.nodeName == 'H1' || b.nodeName == 'H2' || b.nodeName == 'H3' || b.nodeName == 'H4' || b.nodeName == 'H5' || b.nodeName == 'H6')
            {
                element = b;
                break;
            } else
            {
                b = b.parentNode;
            }
        }
    }
    if (element.nodeName == 'SPAN')
    {
        b = element.parentNode;
        while (b)
        {
            if (b.nodeName == 'P' || b.nodeName == 'H1' || b.nodeName == 'H2' || b.nodeName == 'H3' || b.nodeName == 'H4' || b.nodeName == 'H5' || b.nodeName == 'H6')
            {
                element = b;
                break;
            } else
            {
                b = b.parentNode;
            }
        }
    }

    var child = element.firstChild;
    var chiclass = child.className;
    if (chiclass == "UNSTRUCTREF")
    {
        //alert($(child).html());
        var attributes = element.attributes;
        var i = attributes.length;
        while (i--) {
            element.removeAttributeNode(attributes[i]);
        }
        element.removeAttribute("class");
        element.setAttribute("class", "refpara");
        $("<p class='refpara'>" + $(child).html() + "</p>").insertBefore(element);
        $(element).remove();
    }
}
//shortcut key function for applying heading levels
function applyHeadings($praval)
{

    var ed = tinyMCE.get('example');
    var element = ed.selection.getNode();

    if (element.nodeName == 'SPAN' || element.nodeName == 'I' || element.nodeName == 'B' || element.nodeName == 'INS')
    {
        b = element.parentNode;
        while (b)
        {
            if (b.nodeName == 'P' || b.nodeName == 'H1' || b.nodeName == 'H2' || b.nodeName == 'H3' || b.nodeName == 'H4' || b.nodeName == 'H5' || b.nodeName == 'H6')
            {
                element = b;
                break;
            } else
            {
                b = b.parentNode;
            }
        }
    }
    if (element.nodeName == 'SPAN' || element.nodeName == 'I' || element.nodeName == 'B' || element.nodeName == 'INS')
    {
        b = element.parentNode;
        while (b)
        {
            if (b.nodeName == 'P' || b.nodeName == 'H1' || b.nodeName == 'H2' || b.nodeName == 'H3' || b.nodeName == 'H4' || b.nodeName == 'H5' || b.nodeName == 'H6')
            {
                element = b;
                break;
            } else
            {
                b = b.parentNode;
            }
        }
    }
    if (element.nodeName == 'SPAN' || element.nodeName == 'I' || element.nodeName == 'B' || element.nodeName == 'INS')
    {
        b = element.parentNode;
        while (b)
        {
            if (b.nodeName == 'P' || b.nodeName == 'H1' || b.nodeName == 'H2' || b.nodeName == 'H3' || b.nodeName == 'H4' || b.nodeName == 'H5' || b.nodeName == 'H6')
            {
                element = b;
                break;
            } else
            {
                b = b.parentNode;
            }
        }
    }
    if (element.nodeName == 'SPAN' || element.nodeName == 'I' || element.nodeName == 'B' || element.nodeName == 'INS')
    {
        b = element.parentNode;
        while (b)
        {
            if (b.nodeName == 'P' || b.nodeName == 'H1' || b.nodeName == 'H2' || b.nodeName == 'H3' || b.nodeName == 'H4' || b.nodeName == 'H5' || b.nodeName == 'H6')
            {
                element = b;
                break;
            } else
            {
                b = b.parentNode;
            }
        }
    }

    var divelement = element;
    ///  get parent div of FM, BODY, BACk element ///
    $divclassname = "";
    if (divelement.parentNode.className == 'front' || divelement.parentNode.className == 'bodymatter' || divelement.parentNode.className == 'references' || divelement.parentNode.className == 'back' || divelement.parentNode.className == 'floats')
    {
        $divclassname = divelement.parentNode.className;
    } else
    {
        divelement = divelement.parentNode;
        if (divelement.parentNode.className == 'front' || divelement.parentNode.className == 'bodymatter' || divelement.parentNode.className == 'references' || divelement.parentNode.className == 'back' || divelement.parentNode.className == 'floats')
        {
            $divclassname = divelement.parentNode.className;
        } else
        {
            divelement = divelement.parentNode;
            if (divelement.parentNode.className == 'front' || divelement.parentNode.className == 'bodymatter' || divelement.parentNode.className == 'references' || divelement.parentNode.className == 'back' || divelement.parentNode.className == 'floats')
            {
                $divclassname = divelement.parentNode.className;
            } else
            {
                divelement = divelement.parentNode;
                if (divelement.parentNode.className == 'front' || divelement.parentNode.className == 'bodymatter' || divelement.parentNode.className == 'references' || divelement.parentNode.className == 'back' || divelement.parentNode.className == 'floats')
                {
                    $divclassname = divelement.parentNode.className;
                } else
                {
                    divelement = divelement.parentNode;
                    if (divelement.parentNode.className == 'front' || divelement.parentNode.className == 'bodymatter' || divelement.parentNode.className == 'references' || divelement.parentNode.className == 'back' || divelement.parentNode.className == 'floats')
                    {
                        $divclassname = divelement.parentNode.className;
                    } else
                    {
                        divelement = divelement.parentNode;
                    }
                }
            }
        }
    }


    if ($praval == "heading1")
    {
        if ($divclassname == "bodymatter")
        {
            element.removeAttribute("class");
            element.setAttribute("class", $praval);

            var paratext = element.outerHTML.replace(/<h(\d+)/g, "<h1");
            paratext = paratext.replace(/<\/h(\d+)>/g, "</h1>");
            paratext = paratext.replace(/<p/g, "<h1");
            paratext = paratext.replace(/<\/p>/g, "</h1>");
            element.outerHTML = paratext;


        } else
        {
            tinyMCE.activeEditor.windowManager.alert("This ( Alt-1 ) short cut key does not valid in " + $divclassname);
        }

    } else if ($praval == "heading2")
    {
        if ($divclassname == "bodymatter")
        {

            element.removeAttribute("class");
            element.setAttribute("class", $praval);

            var paratext = element.outerHTML.replace(/<h(\d+)/g, "<h2");
            paratext = paratext.replace(/<\/h(\d+)>/g, "</h2>");
            paratext = paratext.replace(/<p/g, "<h2");
            paratext = paratext.replace(/<\/p>/g, "</h2>");
            element.outerHTML = paratext;

        } else
        {
            tinyMCE.activeEditor.windowManager.alert("This ( Alt-2 ) short cut key does not valid in " + $divclassname);
        }

    } else if ($praval == "heading3")
    {
        if ($divclassname == "bodymatter")
        {

            element.removeAttribute("class");
            element.setAttribute("class", $praval);

            var paratext = element.outerHTML.replace(/<h(\d+)/g, "<h3");
            paratext = paratext.replace(/<\/h(\d+)>/g, "</h3>");
            paratext = paratext.replace(/<p/g, "<h3");
            paratext = paratext.replace(/<\/p>/g, "</h3>");
            element.outerHTML = paratext;

        } else
        {
            tinyMCE.activeEditor.windowManager.alert("This ( Alt-3 ) short cut key does not valid in " + $divclassname);
        }

    } else if ($praval == "heading4")
    {
        if ($divclassname == "bodymatter")
        {

            element.removeAttribute("class");
            element.setAttribute("class", $praval);

            var paratext = element.outerHTML.replace(/<h(\d+)/g, "<h4");
            paratext = paratext.replace(/<\/h(\d+)>/g, "</h4>");
            paratext = paratext.replace(/<p/g, "<h4");
            paratext = paratext.replace(/<\/p>/g, "</h4>");
            element.outerHTML = paratext;

        } else
        {
            tinyMCE.activeEditor.windowManager.alert("This ( Alt-4 ) short cut key does not valid in " + $divclassname);
        }

    } else if ($praval == "normal")
    {
		/*
		while (element.attributes.length > 0) {
            element.removeAttribute(element.attributes[0].name);
        }
		*/
        element.removeAttribute("class");
        element.setAttribute("class", $praval);

        var paratext = element.outerHTML.replace(/<h(\d+)/g, "<p");
        paratext = paratext.replace(/<\/h(\d+)>/g, "</p>");
        paratext = paratext.replace(/<p/g, "<p");
        paratext = paratext.replace(/<\/p>/g, "</p>");
        element.outerHTML = paratext;

    } else if ($praval == "JRNL")
    {
        if ($divclassname == "references")
        {
            element.removeAttribute("class");
            element.setAttribute("class", $praval);
        } else
        {
            tinyMCE.activeEditor.windowManager.alert("This ( Alt-J ) short cut key does not valid in " + $divclassname);
        }
    } else if ($praval == "BOOK")
    {
        if ($divclassname == "references")
        {
            element.removeAttribute("class");
            element.setAttribute("class", $praval);
        } else
        {
            tinyMCE.activeEditor.windowManager.alert("This ( Alt-B ) short cut key does not valid in " + $divclassname);
        }
    } else if ($praval == "EDBK")
    {
        if ($divclassname == "references")
        {
            element.removeAttribute("class");
            element.setAttribute("class", $praval);
        } else
        {
            tinyMCE.activeEditor.windowManager.alert("This ( Alt-E ) short cut key does not valid in " + $divclassname);
        }
    } else if ($praval == "OTHER")
    {
        if ($divclassname == "references")
        {
            element.removeAttribute("class");
            element.setAttribute("class", $praval);
        } else
        {
            tinyMCE.activeEditor.windowManager.alert("This ( Alt-O ) short cut key does not valid in " + $divclassname);
        }
    } else if ($praval == "ArticleTitleHead")
    {
        if ($divclassname == "front")
        {
            element.removeAttribute("class");
            element.setAttribute("class", $praval);
        } else
        {
            tinyMCE.activeEditor.windowManager.alert("This ( Alt-A ) short cut key does not valid in " + $divclassname);
        }
    } else if ($praval == "Affiliation")
    {
        if ($divclassname == "front")
        {
            element.removeAttribute("class");
            element.setAttribute("class", $praval);
        } else
        {
            tinyMCE.activeEditor.windowManager.alert("This ( Alt-F ) short cut key does not valid in " + $divclassname);
        }
    } else if ($praval == "AuthorGroup")
    {
        if ($divclassname == "front")
        {
            element.removeAttribute("class");
            element.setAttribute("class", $praval);
        } else
        {
            tinyMCE.activeEditor.windowManager.alert("This ( Alt-G ) short cut key does not valid in " + $divclassname);
        }
    } else if ($praval == "Abstractpara")
    {
        if ($divclassname == "front")
        {
            element.removeAttribute("class");
            element.setAttribute("class", $praval);
        } else
        {
            tinyMCE.activeEditor.windowManager.alert("This ( Alt-U ) short cut key does not valid in " + $divclassname);
        }
    } else if ($praval == "Keywords")
    {
        if ($divclassname == "front")
        {
            element.removeAttribute("class");
            element.setAttribute("class", $praval);
        } else
        {
            tinyMCE.activeEditor.windowManager.alert("This ( Alt-K ) short cut key does not valid in " + $divclassname);
        }
    } else
    {

        element.removeAttribute("class");
        element.setAttribute("class", $praval);
    }

    $('#advanced-demo').val('');
    getclassesforlisting();

}

function removeAllAttributes($classvalue) {
    var ed = tinyMCE.get('example');
    var element = ed.selection.getNode();
    while (element.attributes.length > 0) {
        element.removeAttribute(element.attributes[0].name);
    }
    element.setAttribute("class", $classvalue);

    var paratext = element.outerHTML.replace(/<h(\d+)/g, "<p");
    paratext = paratext.replace(/<\/h(\d+)>/g, "</p>");
    paratext = paratext.replace(/<p/g, "<p");
    paratext = paratext.replace(/<\/p>/g, "</p>");
    element.outerHTML = paratext;
}

function refpstyles($refpstylestext, $refpstylesval, $refpstylestype)
{

    var clsname = $refpstylesval;
    var clsoldname = $refpstylestext;


    var ed = tinyMCE.get('example');
    var element = ed.selection.getNode();

    if (element.nodeName == 'SPAN')
    {
        b = element.parentNode;
        while (b)
        {
            if (b.nodeName == 'P' || b.nodeName == 'H1' || b.nodeName == 'H2' || b.nodeName == 'H3' || b.nodeName == 'H4' || b.nodeName == 'H5' || b.nodeName == 'H6')
            {
                element = b;
                break;
            } else
            {
                b = b.parentNode;
            }
        }
    }
    if (element.nodeName == 'SPAN')
    {
        b = element.parentNode;
        while (b)
        {
            if (b.nodeName == 'P' || b.nodeName == 'H1' || b.nodeName == 'H2' || b.nodeName == 'H3' || b.nodeName == 'H4' || b.nodeName == 'H5' || b.nodeName == 'H6')
            {
                element = b;
                break;
            } else
            {
                b = b.parentNode;
            }
        }
    }
    if (element.nodeName == 'SPAN')
    {
        b = element.parentNode;
        while (b)
        {
            if (b.nodeName == 'P' || b.nodeName == 'H1' || b.nodeName == 'H2' || b.nodeName == 'H3' || b.nodeName == 'H4' || b.nodeName == 'H5' || b.nodeName == 'H6')
            {
                element = b;
                break;
            } else
            {
                b = b.parentNode;
            }
        }
    }
    if (element.nodeName == 'SPAN')
    {
        b = element.parentNode;
        while (b)
        {
            if (b.nodeName == 'P' || b.nodeName == 'H1' || b.nodeName == 'H2' || b.nodeName == 'H3' || b.nodeName == 'H4' || b.nodeName == 'H5' || b.nodeName == 'H6')
            {
                element = b;
                break;
            } else
            {
                b = b.parentNode;
            }
        }
    }
    $pstyles = false;
    while (element)
    {
        $pstyles = false;
        if (element.nodeName == 'P' || element.nodeName == 'H1' || element.nodeName == 'H2' || element.nodeName == 'H3' || element.nodeName == 'H4' || element.nodeName == 'H5' || element.nodeName == 'H6')
        {

            /* 
             *	To remove all attributes of an element
             */

            if (element.nodeName == 'P')
            {
                /* alert("fdff"); */
                var child = element.firstChild;
                var chiclass = child.className;
                if (chiclass == "UNSTRUCTREF")
                {
                    $pstyles = true;
                }
            }
//						alert($pstyles);
            if ($pstyles)
            {

                break;
            } else
            {
                var attributes = element.attributes;
                var i = attributes.length;
                while (i--) {
                    element.removeAttributeNode(attributes[i]);
                }
                //alert(clsoldname);

                element.setAttribute("data-ptype", "biblio");
                element.setAttribute("data-rtype", $refpstylestype);

                element.removeAttribute("class");
                element.setAttribute("class", clsname);
                $('#advanced-demo').val('');
                getclassesforlisting();
                break;

            }


        } else
        {
            element = element.parentNode;
        }
    }

    if (!$pstyles)
    {

        if (clsname == "ref#JRNL")
        {
            SingleReferences();
        } else
        {
            SingleReferencesold();
        }


    } else
    {
        tinyMCE.activeEditor.windowManager.alert("This Reference already Structured");
    }

}
function refcstyles($refcstylestext, $refcstylesval)
{
    clsname = $refcstylesval;
    classname = clsname;

    var ed = tinymce.activeEditor;
    var content = ed.selection.getContent({
        'format': 'html'
    });
    var g_no = ed.selection.getNode();

    while (g_no) {
        if (g_no.className == 'unknown') {
            g_no.removeAttribute("class");
            break;
        } else {
            g_no = g_no.parentNode;
        }

    }
    var trim_content = content;
    //console.log(trim_content);

    if (trim_content != '') {
        if (!trim_content.startsWith("&nbsp;<disp-formula")) {
            if (!trim_content.startsWith("<disp-formula")) {
                if (!trim_content.startsWith("<inline-formula")) {
                    if (!trim_content.startsWith("<math")) {
                        if (trim_content.startsWith("<p")) {

                            var element = ed.selection.getNode();
                            element.removeAttribute("class");
                            element.setAttribute("class", classname);

                        } else {

                            var span = document.createElement('span');
                            span.innerHTML = trim_content;
                            var elements = span.childNodes;
                            var arrayLength = elements.length;
                            //console.log(elements);
                            var merge = '';
                            for (var i = 0; i < arrayLength; i++) {

                                if (elements[i].nodeName == "#text") {
                                    merge += elements[i].textContent;
                                } else {

                                    merge += elements[i].innerHTML;
                                }
                            }
                            /* var check_classes = getNodeList(span); */
                            var final_m = merge;

                            var new_selection_content = '<span class="' + classname + '">' + final_m + "</span>";
                            //ed.execCommand('insertHTML', false, new_selection_content);

                            ed.execCommand('mceInsertContent', false, "");

                            var element = ed.selection.getNode();
                            $innerhtml = element.innerHTML;
                            $innerhtml = $innerhtml.replace("<br>", "");
                            $innerhtml = $innerhtml.replace("<br/>", "");
                            element.innerHTML = $innerhtml;
                            $(new_selection_content).insertAfter(element);
                            // ed.selection.setContent(new_selection_content);

                        }
                    }
                }
            }
        }

    }
    if ($(".mce-unknown_validation")[0]) {
        var ed = tinymce.activeEditor;
        var unknown = ed.getBody().getElementsByClassName('unknown');
        if (unknown.length >= 1) {

            $('#unknown_count').text(unknown.length);
        }

    }
}

function getclassesforlisting() {
    $('.contentHeadWrapper').html('');
    var myStringArray = getNodeList(tinyMCE.activeEditor.getBody());
    //console.log(myStringArray);
    $('.contentHeadWrapper').html(myStringArray);
    var scroll = tinymce.DOM.getViewPort(tinymce.activeEditor.getWin()).y;
    $(".contentTypeWrapper").scrollTop(scroll);

    function getNodeList(elem) {
        var l = new Array(elem),
                c = 1,
                ret = new Array(),
                para = '';

        for (var r = 0; r < c; r++) {
            for (var z = 0; z < l[r].childNodes.length; z++) {

                if (l[r].childNodes[z].nodeName == 'P' || l[r].childNodes[z].nodeName == 'H1' || l[r].childNodes[z].nodeName == 'H2' || l[r].childNodes[z].nodeName == 'H3' || l[r].childNodes[z].nodeName == 'H4' || l[r].childNodes[z].nodeName == 'H5' || l[r].childNodes[z].nodeName == 'H6') {
                    if (l[r].childNodes[z].parentElement.nodeName != 'TD') {
                        ret.push(l[r].childNodes[z]);
                        //console.log(l[r].childNodes[z]);
                        para += "<p style='position:absolute;top:" + l[r].childNodes[z].offsetTop + "px'>" + l[r].childNodes[z].className + "</p>";
                    }

                }

                if (l[r].childNodes[z].childNodes[0]) {

                    l.push(l[r].childNodes[z]);
                    c++;

                }

                //}
            }
        }
        return para;
        //console.log(para);
    }
}

// Global variables. For demo purposes.
// This variables should be configurated on configuration.ini file.
// Fore more information about custom configuration see http://www.wiris.com/plugins/docs/resources/configuration-table
// We overwrite them in order to show the changes.

// Specifies how the formulas are stored in the database.
// On configuration.ini the name of the variable is wiriseditorsavemode.
var _wrs_conf_saveMode;

// Specifies how the images are displayed on the editor.
// On configuration.ini the name of variable is wiriseditoreditmode.
var _wrs_conf_editMode;
/**
 * This method simulates how the formula rendering on a non editable area using JsPluginViewer (Preview tab)
 * and formulas are stored in the database (HTML tab).
 */
function updateFunction() {
    //updatePreview();
    //updateHTMLCode();
}
function updatePreview() {

}

function updateHTMLCode() {

}
/**
 * Changes WIRIS plugin save mode.
 * 1.- xml: default mode, stores formulas as mathml.
 * 2.- image: stores formulas as images.
 * 3.- base64: stores formulas as base64 images.
 *
 * This method is only for demo purposes. In order to
 * change save mode edit the configuration.ini file (wiriseditorsavemode variable).
 * See http://www.wiris.com/plugins/docs/resources/configuration-table for more information.
 */
function changeMode(mode) {
    // Mathml mode.
    if (mode == 'xml') {
        _wrs_conf_saveMode = 'xml';
    }
    // Image mode.
    else if (mode == 'image') {
        _wrs_conf_saveMode = 'image';
    }
    // Base64 mode.
    else if (mode == 'base64') {
        _wrs_conf_saveMode = 'base64';
        // With this variable, formulas are stored as a base64 image on the database but showed with
        // a showimage src on the editor.
        _wrs_conf_editMode = "image";
    }
    // Updating Preview and HTML tabs.
    updateFunction();
}

/**
 * Reder params can be configured on the server side using configuration.ini file and //TODO @Manuel, what is 'Reder'?
 * wiriseditorparameters variable or on the client side using javascript. // TODO @Manuel, this is ok?
 * wiriseditorparameters is a valid JSON using the key and value parameters referenced here: http://www.wiris.com/editor/docs/reference/parameters
 * For example {toolbar:'quizzes',fontsize:'20px',backgroundColor:'#3B653D',color:'#FEFEFE'} changes the editor toolbar, the fontsize,
 * the background color and the formula color.
 */
function setParameters() {

}
/**
 * Auxiliary functions. For demo purposes.
 */

/**
 * Shows HTML tab. For demo purposes.
 */
function displayHTML() {

}
/**
 * Shows Preview tab. For demo purposes.
 */
function displayPreview() {

}
/**
 * Shows or hide demo advanced options. For demo purposes.
 */
function advancedOptions() {

}
/**
 * Changes WIRIS plugin language and - if it possible - WYSIWYG editor language. For demo purposes.
 */
function changeLanguage() {

}

/**
 * Returns true if JSON declared on editor_parameters textarea is a valid JSON. If not
 * returns false. For demo purposes.
 * @return {bool}
 */
function checkValidJson() {
}
function launch($str1, $str2) {
    var dmp = new diff_match_patch();
    var text1 = $str1;
    var text2 = $str2;

    dmp.Diff_Timeout = 99.0;
    dmp.Diff_EditCost = 30.0;

    var ms_start = (new Date()).getTime();
    var d = dmp.diff_main(text1, text2);
    var ms_end = (new Date()).getTime();

    var ds = dmp.diff_prettyHtml(d);
    return ds;
}
function FileSave()
{
	/* remove mce-match-marker tags */
  var aed = tinyMCE.activeEditor;
    var scontent = aed.dom.select('.mce-match-marker');
    $(scontent).each(function () {
        console.log($(this).html());
        $(this).contents().unwrap();
    });
	
    $(aed.dom.select('.QCCHECKHIDE')).addClass("QCCHECK");
    $(aed.dom.select('.QCCHECKWHIDE')).addClass("QCCHECKW");

    $(aed.dom.select('.QCCHECK')).removeClass("QCCHECKHIDE");
    $(aed.dom.select('.QCCHECKW')).removeClass("QCCHECKWHIDE");

    $(aed.getBody()).find("#temp_f2_find").remove();

    var exist_file_id = $('#exist_file_id').val();
    var exist_file_name = $('#exist_file_name').val();
    var exist_file_path = $('#exist_file_path').val();

    var ed = tinyMCE.get('example');
    /* ed.setProgressState(1); */

    $.ajax({
		'async': false,
		'global': false,
        'url': base_url + 'home/exist_save_file',
        'type': 'POST', //exist_file_id:exist_file_id,
        data: {exist_file_name: exist_file_name, exist_file_path: exist_file_path, text: ed.getContent()},
        'success': function (result) {
            if (result == 0)
            {
                $(".mce-popupwindow").hide();
                tinyMCE.activeEditor.windowManager.alert("Error in document please contact Techsupport immediately!");
            }
        }
    });
}
function Auto_Structure()
{
    PE_STEPS("1", "auto");
    PE_STEPS("2", "auto");
    AllReferencesNew("auto");
    PE_STEPS("4", "auto");
    PE_STEPS("5", "auto");
    PE_STEPS("3", "auto");
    PE_STEPS("6", "auto");
    PE_STEPS("7", "auto");
    PE_STEPS("8", "auto");
}
function htmlqccheck()
{
    var ed = tinyMCE.activeEditor;
    ed.setProgressState(1); // Show progress
    setTimeout(function () {
        $.ajax({
            'async': false,
            'type': "POST",
            'global': false,
            'dataType': 'html',
            'url': base_url + 'home/PE_STEPS22',
            'success': function (data) {
                $rs = data;

                if ($rs.startsWith("Error"))
                {
                    tinyMCE.activeEditor.windowManager.alert($rs);
                    ed.setProgressState(0); // Hide progress
                } else
                {
                    var content = ed.getContent();
                    ed.setContent($rs);
                    ed.setProgressState(0); // Hide progress
                    tinyMCE.activeEditor.windowManager.alert("HTML QCCHECK Completed");
                }
            }
        });
    }, 100);
}
function PE_STEPS($sno, $run_process)
{
debugger;
    var ed = tinyMCE.activeEditor;
    ed.setProgressState(1); // Show progress

    setTimeout(function () {

        $.ajax({
            'async': false,
            'type': "POST",
            'global': false,
            'dataType': 'html',
            'url': base_url + 'home/STEPS_LOG',
            data: {type: 'STEP' + $sno},
            'success': function (data)
            {
			debugger;
                if (data == 0)
                {
                    $.ajax({
                        'async': false,
                        'type': "POST",
                        'global': false,
                        'dataType': 'html',
                        'url': base_url + 'home/PE_STEPS',
                        data: {sno: $sno},
                        'success': function (data)
                        {
                            $rs = data;

                            if ($rs.startsWith("Error"))
                            {
                                if ($sno == 3)
                                {
                                    if ($rs.indexOf("Unstructured reference Found") != -1)
                                    {
                                        var refpara = tinymce.activeEditor.dom.select('p');
                                        $(refpara).each(function ()
                                        {
                                            var clname = $(this).attr("class");
                                            $refparatype = $(this).attr("data-ptype");

                                            if (clname != undefined && clname == "refpara")
                                            {
                                                var ed = tinyMCE.get('example');
                                                $(this)[0].scrollIntoView(true);
                                                ed.focus();
                                                ed.selection.collapse(1);
                                                ed.selection.select(this);
                                                return false;
                                            } else if (clname != undefined && $refparatype == "biblio" && clname.indexOf("ref#") != -1)
                                            {
                                                var ed = tinyMCE.get('example');
                                                $(this)[0].scrollIntoView(true);
                                                ed.focus();
                                                ed.selection.collapse(1);
                                                ed.selection.select(this);

                                                return false;
                                            }
                                        });
                                        tinyMCE.activeEditor.windowManager.alert($rs);
                                    } else
                                    {
                                        tinyMCE.activeEditor.windowManager.alert($rs);
                                    }
                                    ed.setProgressState(0); // Hide progress
                                } else
                                {
                                    tinyMCE.activeEditor.windowManager.alert($rs);
                                    ed.setProgressState(0); // Hide progress
                                }
                            } else
                            {
                                var content = ed.getContent();
                                ed.setContent($rs);
                                refreshParastyleFunction();
                                if ($run_process == "auto")
                                {
                                    if ($sno == 8)
                                    {
                                        ed.setProgressState(0); // Hide progress
                                        tinyMCE.activeEditor.windowManager.alert("File Completed");
                                    }
                                } else
                                {
                                    ed.setProgressState(0);

                                    if ($sno == 1)
                                    {

                                        tinyMCE.activeEditor.windowManager.alert("HTML Structuring Completed");
                                    } 
									else if ($sno == 2)
                                    {
                                        tinyMCE.activeEditor.windowManager.alert("FM Structuring Completed");
                                    } else if ($sno == 3)
                                    {
                                        declareid = false;
                                        triggerclick("Uncite Reference");
                                        tinyMCE.activeEditor.windowManager.alert("Citation Structuring Completed");

                                    } else if ($sno == 4)
                                    {
                                        tinyMCE.activeEditor.windowManager.alert("DOI Insertion Completed");
                                    } else if ($sno == 5)
                                    {
                                        tinyMCE.activeEditor.windowManager.alert("CrossRef Validation Completed");
                                    } else if ($sno == 6)
                                    {
                                        $biid = "";
                                        $("button[role='presentation']").each(function (index) {
                                            if ($(this).text() === "Binomial Citation") {
                                                $biid = $(this).parent().attr("id");
                                            }
                                        });
                                        $('#' + $biid).trigger('click');
                                    } else if ($sno == 7)
                                    {
                                        tinyMCE.activeEditor.windowManager.alert("Enzyme Terms Process Completed");
                                    } else if ($sno == 8)
                                    {
                                        tinyMCE.activeEditor.windowManager.alert("Latin Terms Process Completed");
                                    } else if ($sno == 9)
                                    {
                                        tinyMCE.activeEditor.windowManager.alert("HTML Structuring Completed");
                                    } else if ($sno == 10)
                                    {
                                        tinyMCE.activeEditor.windowManager.alert("HTML Structuring Completed");
                                    } else if ($sno == 11)
                                    {
                                        tinyMCE.activeEditor.windowManager.alert("HTML Structuring Completed");
                                    } else if ($sno == 12)
                                    {
                                        tinyMCE.activeEditor.windowManager.alert("Apply AUDRP Completed");
                                    } else if ($sno == 122)
                                    {
                                        // tinyMCE.activeEditor.windowManager.alert("HTML QC CHECK Completed");
                                    } else if ($sno == 25)
                                    {
                                        tinyMCE.activeEditor.windowManager.alert("Alphabetical Order Completed");
                                    } else if ($sno == 71)
                                    {
                                        tinyMCE.activeEditor.windowManager.alert("Auto Query Completed");
                                    }else if ($sno == 113)
                                    {
                                        tinyMCE.activeEditor.windowManager.alert("HTML Structuring Completed");
                                    }
                                }

                            }

                        }
                    });
                } else
                {
                    if ($run_process == "auto")
                    {
                        if ($sno == 8)
                        {
                            tinyMCE.activeEditor.windowManager.alert("File Completed");
                        }
                    } else
                    {
                        tinyMCE.activeEditor.windowManager.alert("This function already completed!");
                    }
                    ed.setProgressState(0); // Hide progress
                }

            }
        });

    }, 100);
}

function ce_automation($sno)
{
    // alert($sno);
    var ed = tinyMCE.activeEditor;
    ed.setProgressState(1); // Show progress

    setTimeout(function ()
    {
        $.ajax({
            'async': false,
            'type': "POST",
            'global': false,
            'dataType': 'html',
            'url': base_url + 'home/STEPS_LOG',
            data: {type: 'STEP' + $sno},
            'success': function (data)
            {
                if (data == 0) {

                    $.ajax({
                        'async': false,
                        'type': "POST",
                        'global': false,
                        'dataType': 'html',
                        'url': base_url + 'home/CE_STEPS',
                        data: {sno: $sno},
                        'success': function (data) {

                            $rs = data;
                            if ($rs.startsWith("Error"))
                            {
                                ed.setProgressState(0); // Hide progress
                            } else {
                                if ($sno == 101)
                                {
                                    ed.setContent($rs);
                                    ed.setProgressState(0); // Hide progress
                                    tinymce.activeEditor.windowManager.alert("CE Automation Completed");
                                }
                            }

                        }
                    });
                } else {
                    ed.setProgressState(0)
                    tinymce.activeEditor.windowManager.alert("This Function Already Completed!!");
                }

            }
        });

        ed.setProgressState(0); // Show progress
    }, 100);


    /* setTimeout(function()
     {
     $.ajax({
     'async': false,
     'type': "POST",
     'global': false,
     'dataType': 'html',
     'url': base_url+'home/STEPS_LOG',
     data:{type:'STEP'+$sno},
     'success': function (data) 
     {
     if(data == 0){
     // setTimeout(function(){
     $.ajax({
     'async': false,
     'type': "POST",
     'global': false,
     'dataType': 'html',
     'url': base_url+'home/CE_STEPS',
     data:{sno:$sno},
     'success': function (data) {
     
     $rs = data;
     if($rs.startsWith("Error"))
     {
     ed.setProgressState(0); // Hide progress
     }
     else{
     if($sno == 101)
     {
     ed.setProgressState(0); // Hide progress
     tinymce.activeEditor.windowManager.alert("CE Automation Completed");
     }
     }
     
     }
     });
     }
     
     else{
     ed.setProgressState(0)
     tinymce.activeEditor.windowManager.alert("This Function Already Completed!!");
     }	
     }
     });
     }, 100); */

}

function PE_STEP8()
{
    var ed = tinyMCE.activeEditor;
    ed.setProgressState(1); // Show progress
    setTimeout(function () {
        $.ajax({
            'async': false,
            'type': "POST",
            'global': false,
            'dataType': 'html',
            'url': base_url + 'home/PE_STEP8',
            'success': function (data) {
                $rs = data;

                if ($rs.startsWith("Error"))
                {
                    tinyMCE.activeEditor.windowManager.alert($rs);
                    ed.setProgressState(0); // Hide progress
                } else
                {
                    var content = ed.getContent();
                    ed.setContent($rs);
                    ed.setProgressState(0); // Hide progress
                    tinyMCE.activeEditor.windowManager.alert("LatinTerms Conversion Completed");
                }
            }
        });
    }, 100);
}

function PE_STEPS_TEST()
{
    var ed = tinyMCE.activeEditor;
    ed.setProgressState(1); // Show progress
    setTimeout(function () {
        $.ajax({
            'async': false,
            'type': "POST",
            'global': false,
            'dataType': 'html',
            'url': base_url + 'home/PE_STEPS_TEST',
            'success': function (data) {
                $rs = data;

                tinyMCE.activeEditor.windowManager.alert($rs);
                ed.setProgressState(0); // Hide progress	
            }
        });
    }, 100);
}

function PE_STEP7()
{
    var ed = tinyMCE.activeEditor;
    ed.setProgressState(1); // Show progress
    setTimeout(function () {
        $.ajax({
            'async': false,
            'type': "POST",
            'global': false,
            'dataType': 'html',
            'url': base_url + 'home/PE_STEP7',
            'success': function (data) {
                $rs = data;

                if ($rs.startsWith("Error"))
                {
                    tinyMCE.activeEditor.windowManager.alert($rs);
                    ed.setProgressState(0); // Hide progress
                } else
                {
                    var content = ed.getContent();
                    ed.setContent($rs);
                    ed.setProgressState(0); // Hide progress
                    tinyMCE.activeEditor.windowManager.alert("Enzyme Conversion Completed");
                }

            }
        });
    }, 100);
}
//generates xml
function XMLCreation($run_process)
{
    var ed = tinyMCE.activeEditor;
    ed.setProgressState(1); // Show progress
    setTimeout(function () {
        $.ajax({
            'async': false,
            'type': "POST",
            'global': false,
            'dataType': 'html',
            'url': base_url + 'home/XMLCreation',
            'success': function (data) {
                $rs = data;

                if ($rs.startsWith("Error"))
                {
                    tinyMCE.activeEditor.windowManager.alert($rs);
                    ed.setProgressState(0); // Hide progress
                } else
                {
                    ed.setProgressState(0); // Hide progress
                    tinyMCE.activeEditor.windowManager.alert("XML Creation Completed");
                    /* $.ajax({
                     'async': false,
                     'type': "POST",
                     'global': false,
                     'dataType': 'html',
                     'url': base_url+'home/XMLEDITORLINK',
                     'success': function (data) 
                     {
                     window.open(data, '_blank');
                     }
                     }); */
                }

            }
        });
    }, 100);
}
function latex_xml($run_process) {

    var ed = tinyMCE.activeEditor;
    ed.setProgressState(1); // Show progress
    setTimeout(function () {
        $.ajax({
            'async': false,
            'type': "POST",
            'global': false,
            'dataType': 'html',
            'url': base_url + 'home/Latex_creation',
            'success': function (data) {
                $rs = data;

                if ($rs.startsWith("Error"))
                {
                    tinyMCE.activeEditor.windowManager.alert($rs);
                    ed.setProgressState(0); // Hide progress
                } else
                {
                    ed.setProgressState(0); // Hide progress
                    tinyMCE.activeEditor.windowManager.alert("LaTeX Creation Completed"); 
                    download_LATEXfile();
                }
            }
        });
    }, 100);
}

function download_tex() {
        $.ajax({
            'async': false,
            'type': "POST",
            'global': false,
            'dataType': 'html',
            'url': base_url + 'home/download_tex_file_exist',
            'success': function (data) {
                if (data === "faild") {
                    alert("Required \".tex\" file is not available");
                    return false;
                } else {
                    window.location = base_url + 'home/download_tex_file';
                }
            }
        });
}

//generates xml for qc check process
function qc_xml($run_process)
{
    var ed = tinyMCE.activeEditor;
    ed.setProgressState(1); // Show progress
    setTimeout(function () {
        $.ajax({
            'async': false,
            'type': "POST",
            'global': false,
            'dataType': 'html',
            'url': base_url + 'home/XMLCreation',
            'success': function (data) {
                $rs = data;

                if ($rs.startsWith("Error"))
                {
                    tinyMCE.activeEditor.windowManager.alert($rs);
                    ed.setProgressState(0); // Hide progress
                } else
                {
                    ed.setProgressState(0); // Hide progress
                    // tinyMCE.activeEditor.windowManager.alert("XML Creation Completed");
                }
            }
        });
    }, 100);
}

function html2latex()
{
    var ed = tinyMCE.activeEditor;
    ed.setProgressState(1);
    setTimeout(function () {
        $.ajax({
            type: 'POST',
            'global': false,
            'dataType': 'html',
            url: base_url + 'home/html2latex',
            //data:{doi:iii },
            success: function (result) {
                $rs = result;

                if ($rs.startsWith("Error"))
                {
                    tinyMCE.activeEditor.windowManager.alert($rs);
                    ed.setProgressState(0); // Hide progress
                } else
                {
                    ed.setProgressState(0); // Hide progress
                    tinyMCE.activeEditor.windowManager.alert("Latex File Generated.");
                }
            }
        });
    }, 100);
}
function latex2pdf()
{
    var ed = tinyMCE.activeEditor;
    ed.setProgressState(1);
    setTimeout(function () {
        $.ajax({
            type: 'POST',
            'global': false,
            'dataType': 'html',
            url: base_url + 'home/latex2pdf',
            //data:{doi:iii },
            success: function (result) {
                $rs = result;

                $rsdiv = false;

                $clid = "";
                $("button[role='presentation']").each(function (index)
                {
                    if ($(this).text() === "pdfviewer")
                    {
                        $clid = $(this).parent().attr("id");
                    }

                });
                $('#' + $clid).trigger('click');



            }
        });
    }, 100);

}
function GenerateReviewPDF()
{
    var ed = tinyMCE.activeEditor;
    ed.setProgressState(1);
    setTimeout(function () {
        $.ajax({
            type: 'POST',
            'global': false,
            'dataType': 'html',
            url: base_url + 'home/GenerateReviewPDF',
            success: function (result) {
                $rs = result;
                //alert($rs);
                if ($rs.startsWith("Error"))
                {
                    tinyMCE.activeEditor.windowManager.alert($rs);
                    ed.setProgressState(0); // Hide progress
                } else
                {
                    ed.setProgressState(0); // Hide progress
                    tinyMCE.activeEditor.windowManager.alert("Review PDF Generated.");
                }




            }
        });
    }, 100);


}
function GenerateReviewPDF_NEW() {
    var ed = tinyMCE.activeEditor;
    jQuery('.loader').show();
    setTimeout(function () {
        $.ajax({
            type: 'POST',
            'global': false,
            'dataType': 'html',
            url: base_url + 'home/GenerateReviewPDF_NEW',
            success: function (result) {
                $rs = result;
                //alert($rs);
                if ($rs.startsWith("Error"))
                {
                    tinyMCE.activeEditor.windowManager.alert($rs);
                    jQuery('.loader').hide(); // Hide progress
                } else
                {
                    jQuery('.loader').hide(); // Hide progress
                    tinyMCE.activeEditor.windowManager.alert("Review PDF NEW Generated.");
                }
            }
        });
    }, 100);
}
function GenerateReportPDF()
{
    var ed = tinyMCE.activeEditor;
    ed.setProgressState(1);
    setTimeout(function () {
        $.ajax({
            type: 'POST',
            'global': false,
            'dataType': 'html',
            url: base_url + 'home/GenerateReportPDF',
            success: function (result) {
                $rs = result;
                //alert($rs);
                if ($rs.startsWith("Error"))
                {
                    tinyMCE.activeEditor.windowManager.alert($rs);
                    ed.setProgressState(0); // Hide progress
                } else
                {
                    ed.setProgressState(0); // Hide progress
                    tinyMCE.activeEditor.windowManager.alert("Report PDF Generated.");
                }




            }
        });
    }, 100);


}

function ApplyAUGRP()
{
    var ed = tinyMCE.activeEditor;
    var refpara = tinymce.activeEditor.dom.select('div');
    $(refpara).each(function () {
        var clname = $(this).attr("class");
        if (clname != undefined && clname == "references") {
            $ApplyAUGRPtext = $(this).html();
            $.ajax({
                type: 'POST',
                'global': false,
                'dataType': 'html',
                url: base_url + 'home/ApplyAUGRP',
                data: {ApplyAUGRPtext: $ApplyAUGRPtext},
                success: function (result) {


                }
            });
        }
    });


    /*
     
     var ed = tinyMCE.activeEditor;
     ed.setProgressState(1); 
     setTimeout(function(){
     $.ajax({
     type:'POST',
     'global': false,
     'dataType': 'html',
     url:base_url+'home/ApplyAUGRP',
     //data:{doi:iii },
     success:function(result){
     $rs = result;
     
     if($rs.startsWith("Error"))
     {
     tinyMCE.activeEditor.windowManager.alert($rs);
     ed.setProgressState(0); // Hide progress
     }
     else
     {
     ed.setProgressState(0); // Hide progress
     tinyMCE.activeEditor.windowManager.alert("DVI Generated.");
     }
     
     
     
     
     }
     });
     }, 100);
     
     */
}

function SingleReferencesold()
{

    var ed = tinyMCE.activeEditor;
    var element = ed.dom.getParent(ed.selection.getNode(), 'p');
    var refpara = element.outerHTML;
    $reftype = element.getAttribute("data-rtype");
    // alert(refpara.attr("class"));
    $reftext = element.innerHTML;
    /* alert($reftext);						 */
    ed.setProgressState(1); // Show progress
    setTimeout(function () {
        $.ajax({
            type: 'POST',
            'global': false,
            'dataType': 'html',
            url: base_url + 'home/Ref_Structuring',
            data: {reftext: $reftext, reftype: $reftype},
            //'url': base_url+'home/Ref_Structuring_New',
            //data:{reftext:$reftext ,sno:"11"},
            success: function (result) {
                //alert(result); 
                if (result.indexOf("No pattern Found for this type") != -1)
                {
                    alert(result);
                    ed.setProgressState(0); // Hide progress
                } else
                {
                    // alert(result); 

                    $(result).insertBefore(element);
                    $(element).remove();

                    /* 	ed.selection.getNode().remove();
                     ed.selection.setContent(result); */
                    ed.setProgressState(0); // Hide progress

                }

            }
        });
    }, 100);
//alert("dddd");
    $("refreshParastyle").on("click", refreshParastyleFunction, false);
//refreshParastyleFunction();

}

function SingleReferences()
{
    // alert("SingleReferences");
    var ed = tinyMCE.activeEditor;
    var element = ed.dom.getParent(ed.selection.getNode(), 'p');
    var refpara = element.outerHTML;
    $reftype = element.getAttribute("data-rtype");
    // alert(refpara.attr("class"));
    $reftext = element.innerHTML;
    // alert($reftext);						 
    ed.setProgressState(1); // Show progress
    setTimeout(function () {
        $.ajax({
            type: 'POST',
            'global': false,
            'dataType': 'html',
            //url:base_url+'home/Ref_Structuring',
            //data:{reftext:$reftext,reftype:$reftype },
            'url': base_url + 'home/Ref_Structuring_New',
            data: {reftext: $reftext, sno: "11"},
            success: function (result) {
                //alert(result); 
                if (result.indexOf("No pattern Found for this type") != -1)
                {
                    alert(result);
                    ed.setProgressState(0); // Hide progress
                } else
                {
                    // alert(result); 

                    $(result).insertBefore(element);
                    $(element).remove();

                    /* 	ed.selection.getNode().remove();
                     ed.selection.setContent(result); */
                    ed.setProgressState(0); // Hide progress

                }

            }
        });
    }, 100);
//alert("dddd");
    $("refreshParastyle").on("click", refreshParastyleFunction, false);
//refreshParastyleFunction();
}

function AllReferences($run_process)
{
    var ed = tinyMCE.get('example');
    ed.setProgressState(1); // Show progress
    setTimeout(function () {
        var refpara = tinymce.activeEditor.dom.select('p');
        $(refpara).each(function () {
            var clname = $(this).attr("class");
            $reftype = $(this).attr("data-rtype");
            $refparatype = $(this).attr("data-ptype");

            if (clname != undefined && $refparatype == "biblio") {
                // var ed = tinyMCE.activeEditor;

                $(this)[0].scrollIntoView(true);
                ed.focus();
                ed.selection.select(this);
                ed.selection.collapse(0)

                // alert($(this).html("1111"));

                $reftext = $(this).html();
                // alert($reftext)		;

                $rs = "";

                $.ajax({
                    'async': false,
                    'type': "POST",
                    'global': false,
                    'dataType': 'html',
                    'url': base_url + 'home/Ref_Structuring',
                    data: {reftext: $reftext, reftype: $reftype},
                    'success': function (data) {
                        $rs = data;
                    }
                });

                // alert($rs);
                if ($rs.indexOf("No pattern Found for this type") != -1)
                {
                    // alert(result);
                    //ed.setProgressState(0); // Hide progress
                } else
                {
                    $($rs).insertBefore(this);
                    $(this).remove();
                    FileSave();
                }
            }
        });
        if ($run_process == "auto")
        {
        } else
        {
            ed.setProgressState(0); // Hide progress
            tinyMCE.activeEditor.windowManager.alert("Bib Structuring Completed");
        }


    }, 100);
    refreshParastyleFunction();
}

function AllReferencesNew($run_process)
{
    var ed = tinyMCE.get('example');
    ed.setProgressState(1); // Show progress
    setTimeout(function () {
        var refpara = tinymce.activeEditor.dom.select('p');
        $(refpara).each(function () {
            var clname = $(this).attr("class");


            if (clname != undefined && clname.startsWith("ref")) {
                // var ed = tinyMCE.activeEditor;

                $(this)[0].scrollIntoView(true);
                ed.focus();
                ed.selection.select(this);
                ed.selection.collapse(0)

                // alert($(this).html("1111"));

                $reftext = $(this).html();
                //alert($reftext);

                $rs = "";

                $.ajax({
                    'async': false,
                    'type': "POST",
                    'global': false,
                    'dataType': 'html',
                    'url': base_url + 'home/Ref_Structuring_New',
                    data: {reftext: $reftext, sno: "11"},
                    'success': function (data) {
                        $rs = data;
                    }
                });
                // alert($rs);
                if ($rs.indexOf("No pattern Found for this type") != -1)
                {
                    // alert(result);
                    //ed.setProgressState(0); // Hide progress
                } else
                {
                    $($rs).insertBefore(this);
                    $(this).remove();
                    FileSave();
                }
            }
        });
        if ($run_process == "auto")
        {
        } else
        {
            ed.setProgressState(0); // Hide progress
            tinyMCE.activeEditor.windowManager.alert("Bib Structuring New Completed");
        }

    }, 100);
}

function REF_STRUCTURE($sno, $run_process)
{
    var ed = tinyMCE.get('example');
    ed.setProgressState(1); // Show progress
    setTimeout(function () {

        $rs = "";

        $.ajax({
            'async': false,
            'type': "POST",
            'global': false,
            'dataType': 'html',
            'url': base_url + 'home/REF_STRUCTURE',
            data: {reftext: "", sno: $sno},
            'success': function (data) {
                $rs = data;
            }
        });



        if ($rs == "auto")
        {
        } else
        {
            if ($sno == 40)
            {
                tinyMCE.activeEditor.windowManager.alert("PDF Creation Completed");
            } else {
                //var content = ed.getContent();
                ed.setContent($rs);

                if ($sno == 14)
                {
                    tinyMCE.activeEditor.windowManager.alert("Ref Structuring Completed");
                } else if ($sno == 60)
                {
                    tinyMCE.activeEditor.windowManager.alert("Binomial Process Completed");
                }
            }
            ed.setProgressState(0); // Hide progress
        }

    }, 100);
}

function loadContentfrombackup(a, id) {
    var file = $(a).text();
    $.ajax({
        type: 'POST',
        url: base_url + 'home/loadContentfrombackup',
        data: {filename: file, file_id: id},
        success: function (result) {
            tinyMCE.activeEditor.setContent(result);
            $('.mce-close').trigger('click');
        }
    });
}
function saveThisFile(processname = '', file_id = '') {
    var exist_file_id = $('#exist_file_id').val();
    var exist_file_name = $('#exist_file_name').val();
    var exist_file_path = $('#exist_file_path').val();
    var ed = tinyMCE.get('example');
    //ed.setProgressState(1); // Show progress
	jQuery('.loader').show();
    if (exist_file_id == '') {
        tinyMCE.activeEditor.windowManager.open({
            title: "File Save",
            body: {type: 'textbox', name: 'file_name', id: 'file_name', label: 'File Name', placeholder: 'Enter File Name'},
            width: 520,
            height: 240,
            onClose: function () {
                tinyMCE.activeEditor.focus();
                //ed.setProgressState(0); // Hide progress
				jQuery('.loader').hide();

            },
            buttons: [{
                    text: 'Save',
                    subtype: 'primary',
                    onclick: function (e) {
                        var filename = $('#file_name').val();
                        if (filename == '') {
                            alert('File Name field is required');
                            return false;
                        } else {
                            $.ajax({
                                type: 'POST',
                                url: base_url + 'home/check_file_exist',
                                data: {filename: filename},
                                success: function (result) {
                                    var obj = JSON.parse(result);
                                    if (obj['status'] == '200') {
                                        alert(obj['msg']);
                                        //ed.setProgressState(0);
										jQuery('.loader').hide();
                                        return false;
                                    } else {
                                        $.ajax({
                                            url: base_url + 'home/save_new_file',
                                            type: 'POST',
                                            data: {filename: filename, text: ed.getContent()},
                                            success: function (result) {
                                                //ed.setProgressState(0);
												jQuery('.loader').hide();
                                                var obj = JSON.parse(result);
                                                console.log(obj.file[0]['file_name']);
                                                var filename = obj.file[0]['file_name'];
                                                var id = obj.file[0]['id'];
                                                var filepath = obj.file[0]['file_source_path'];
                                                $('#exist_file_id').val(id);
                                                $('#exist_file_name').val(filename);
                                                $('#exist_file_path').val(filepath);
                                                window.history.pushState({}, '', base_url + 'home/edit_file/' + id + '/' + filename);
                                                $('.mce-close').trigger('click');

                                            }
                                        });
                                    }
                                }
                            });
                        }
                    }
                },
                {
                    text: 'Close',
                    onclick: function () {
                        $('.mce-close').trigger('click');
                    }
                }],
        },
                {
                    custom_param: 1
                });
    } else {//alert(exist_file_name);alert(exist_file_path);
	
	/*~~~~~~~ remove mce-match-marker tags ~~~~~*/
	/*
        var aed = tinyMCE.activeEditor;
        var scontent = aed.dom.select('.mce-match-marker');
        $(scontent).each(function () {
            console.log($(this).html());
            $(this).contents().unwrap();
        });
        $(aed.getBody()).find("#temp_f2_find").remove();
	*/
        $.ajax({
            url: base_url + 'home/exist_save_file',
            type: 'POST', //exist_file_id:exist_file_id,
            data: {exist_file_id: exist_file_id, exist_file_name: exist_file_name, exist_file_path: exist_file_path, text: '<meta http-equiv="content-type" content="text/html; charset=UTF-8" />' + ed.getContent()},
            success: function (result) {
                if (result == 0)
                {
                    $(".mce-popupwindow").hide();
                    tinyMCE.activeEditor.windowManager.alert("Error in document please contact Techsupport immediately!");
                }

                //ed.setProgressState(0);
				jQuery('.loader').hide();
            }
        });
}
}
/* function change_type(k)
 {
 $('.mce-close').trigger('click'); 
 var ed=tinyMCE.activeEditor;
 var type=$(k).attr('id');console.log(type);
 ed.getBody().getElementsByClassName('Reference')[0].setAttribute('type',type);
 
 //ed.saveFile();
 var exist_file_id = $('#exist_file_id').val();
 var exist_file_name = $('#exist_file_name').val();
 var exist_file_path = $('#exist_file_path').val();
 var ed = tinyMCE.get('example');
 ed.setProgressState(1);
 $.ajax({
 url: base_url+'home/exist_save_file',
 type: 'POST', //exist_file_id:exist_file_id,
 data: {exist_file_name:exist_file_name,exist_file_path:exist_file_path,text: '<meta http-equiv="content-type" content="text/html; charset=UTF-8" />'+ed.getContent()},
 success: function(result){
 setTimeout(function(){ 
 $('.mce-confirmationButton').trigger('click');
 },3000);
 }
 });
 } */

/**
 * Auxiliary function. Returns an empty string if a JSON has a valid format.
 * If not returns an error message. For demo purposes.
 * @param  {string}  json 	JSON string.
 * @return {string}
 */
function isValidJson(json) {
    try {
        var v1 = JSON.parse(JSON.stringify(eval('[' + json + '][0]')));
        return "";
    } catch (e) {
        return e.message;
    }
}

/**
 * Auxiliary function. Highlights demo technology logo. For demo purposes.
 */
function activateTechLogo() {
}

/**
 * Format database data in HTML tab. For demo porpouses.
 */
function highlightCode() {
}
/**
 * Set atitles for images. For demo purposes.
 * 
 */
function imgSetTitle(preview_div) {
    var imgs = preview_div.getElementsByTagName("img");
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].title = imgs[i].alt;

    }
}

String.prototype.splice = function splice(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

String.prototype.getMatchIndices = function (find) {
    var indices = [], data, exp = (typeof find == 'string' ? new RegExp(find, 'g') : find);

    while ((data = exp.exec(this))) {
        indices.push(data.index);
    }

    return indices.length ? indices : [];
};

activateTechLogo();

advancedOptions();

displayPreview();

function setUserMCE(el)
{
    var name = $(el).find(':selected').data('username');
    var id = $(el).find(':selected').data('userid');
    tinymce.execCommand('ice_changeuser', {id: id, name: name});
}


/**
 * Creates a TINYMCE instance on "example" div.
 * @param  {string} lang              TINYMCE language. WIRIS plugin read this variable to set the editor lang.
 * @param  {string} wiriseditorparameters JSON containing WIRIS editor parameters.
 */
var pagstyleid = '';
var isreadonly = false;
function createEditorInstance(lang, wiriseditorparameters) {
	var browser_spellcheck = false;
	var pub_name = $("#exist_pub_name").val();
	if(pub_name=="WK")
		browser_spellcheck=false;

    var dir = 'ltr';
    if (lang == 'ar' || lang == 'he') {
        dir = 'rtl';
    }

    if (typeof wiriseditorparameters == 'undefined') {
        wiriseditorparameters = {};
    }
	//read only
    if (linkType == 'RO') {
        isreadonly = true;
    }
    //read only
	
	// Get context menu lists from DB
    getContextmenulists();
	
    lang = 'en';
    tinymce.init({
        selector: '#example',
        verify_html: false, // remove empty elems
        menu: {
            file: {title: 'File', items: 'save close'},
            edit: {title: 'Edit', items: 'undo redo | cut copy | selectall'}, //paste pastetext
            insert: {title: 'Insert', items: 'image link |  pagebreak  charmap | Figure | Inline_Figure'}, //media insertdatetime nonbreaking template
            view: {title: 'View', items: 'visualblocks preview '}, //visualchars visualaid | fullscreen
            format: {title: 'Format', items: 'bold italic underline strikethrough superscript subscript indent outdent | formats | removeformat | doublestrikethrough | '},
            table: {title: 'Table', items: 'inserttable tableprops deletetable | insertrowandcolumn cell row column | convert Autofit'},
            // tools  : {title : 'Tools' , items : 'code nanospell'},//code
            //exportmenu  : {title : 'Export' , items : 'Export ExportAsXML'},
            /* structuring  : {title : 'Structuring' , items : 'HTML_Structuring'},
             reference  : {title : 'Reference Structuring' , items : 'single all'}, */
            math: {title: 'Math', items: 'Disp_math inline_math inline_fig renumbering'},
            //Integra  : {title : 'Integra' , items : 'AM_Tools'}
            //Integra: {title: 'Integra', items: 'Insert_options Pre_Editing Copy_Editing XML_Team LATEX_Team download_options ReRun Complete submit_author author_submission'}
			Integra: { title: 'Integra', items: mainmenu_disp.replace('LATEX_Team', 'review LATEX_Team') }
        },

        menubar: 'file edit insert view format table exportmenu math Integra', //cleanup tools
        height: 200,
        skin: 'lightgray',
        auto_focus: true,
        //contextmenu: "cut copy save | googlesearch insertcomment thesaurus applystyles insertcustomlink | authorgroupform ins-author-grp Backmatterreorder AddFootnote affiliationform keywordsform | inserttable | tableprops Alignment SelectAll splittable splitcell insertrowandcolumn cell row column deletetable | acceptchange rejectchange removegrantdisclosure rerun | convert tablealign cellalign cellalign1 Autofit deletequery Refcomponent InsertRef DeleteRef footnote ref-unstyle author-style", //RerunRef deletefunderdiv
        contextmenu: contextmenu_disp,
		valid_elements: '*[*]',
        language: 'en',
        directionality: dir,
        style_formats: [],
		formats: {
			// Changes the default format for the bold button to produce a span with a bold class
			// bold: { inline: 'b', classes: 'UPD', title:'test bnn' },
			// italic: { inline: 'i', classes: 'UPD' }, 
			// underline: { inline: 'u', classes: 'UPD' }, 
			// strikethrough: { inline: 'strike', classes: 'UPD' }, 
			// superscript: { inline: 'sup', classes: 'UPD' }, 
			// subscript: { inline: 'sub', classes: 'UPD' }
		},
        //adding plugin name in this section
        plugins: 'advlist,autolink,link,autoresize,wordcount,autosave,directionality,fullpage,fullscreen,insertdatetime,lists,media,nonbreaking,noneditable,sorting,pagebreak,paste,preview,print,save,searchreplace,tabfocus,table,template,visualchars,ice,textcolor,colorpicker,reverse,newformats,charmap,visualblocks,code,contextmenu,zoom,lineheight style,reference_duplication,citation,floats,process,confirmation,floatconfirmation,CrossrefConnection, MathEditor, insertlink, RefManualStructure, pdfviewer,latexpdf,RStyles,PStyles,CStyles,Query,Help,RefManager,UKUS,BinomialCheck, AbbrCheck, CommentList, Hyphen, ListQuery, accession, Link_styles, Uncite, spellchecker, generatexml, QCReport, preprint, proofpdf, CEautomation, RefList,Track,generatemetaxml,DTDValidation,suggestions,pagination,info_viewer,Styles,Tochead,finding,replace,Reviewitems', // mathSymbols tiny_mce_wiris,casechange Enzyme,FigureCitation,BinomialCitation,Latin,ReferenceCitation ,Uncitedcitation GMR Uncitedcitation QC_Check_Error,tma_annotate,Uncited 
        // external_plugins: {"nanospell": "plugins/nanospell/plugin.js","tiny_mce_wiris": 'https://www.wiris.net/demo/plugins/tiny_mce/plugin.js',"mathSymbols":"https://www.tuhh.de/MathJax/MathJax.js?config=TeX-AMS_HTML" },
        // external_plugins: {"nanospell": "plugins/nanospell/plugin.js","mathSymbols":"https://www.tuhh.de/MathJax/MathJax.js?config=TeX-AMS_HTML"},
		external_plugins: {"nanospell": "plugins/nanospell/plugin.js"},
        // var _wrs_conf_parseModes = ['latex'];
        //browser_spellcheck: browser_spellcheck, // as sathish said remove the spell checker
        /* toolbar: 'undo redo | fontselect fontsizeselect bold italic underline strikethrough subscript superscript case1 removeformat forecolor backcolor | bullist numlist outdent indent alignleft aligncenter alignright alignjustify | link image fullscreen | codesample | example | find | charmap | visualblocks | reverse | ice_togglechanges ice_toggleshowchanges iceacceptall icerejectall iceaccept icereject | tiny_mce_wiris_formulaEditor | tma_annotate,tma_annotatedelete',*/
        toolbar1: ' undo redo | removeformat removeformat1 removeformat2 bold italic underline strikethrough doublestrike subscript superscript  |  bullist numlist | nanospell nanospelllanguage suggestions | charmap | codesample |  fullscreen | zoom zoomIn zoomOut |   ice_togglechanges ice_toggleshowchanges iceacceptall icerejectall iceaccept icereject   Paragraph  Companylogo ', //bullist numlist outdent indent alignleft aligncenter alignright alignjustify visualblocks | reverse forecolor backcolor case1  tiny_mce_wiris_formulaEditor mathSymbols  BackButton
        //toolbar2:' codesample | link unlink image | lineheightselect searchreplace | fullscreen | zoom zoomIn zoomOut | tiny_mce_wiris_formulaEditor | tma_annotate tma_annotatedelete commentLists | ice_togglechanges ice_toggleshowchanges iceacceptall icerejectall iceaccept icereject  sorting sortingde Companylogo',
        toolbar2: 'ParagraphStyles stylebutton Link_styles Query Help RefManager ListQuery Track Styles Tochead SubmitEditorFile SkipEditorFile TestahsvrAPI', // fontselect fontsizeselect, RefManualStructure,CrossrefConnection RStyles DTDValidation QCReport accession MathEditor PStyles CStyles
				
		toolbar3:dynm_toolbar3,			
		toolbar4:dynm_toolbar4,			
		toolbar5:dynm_toolbar5,			
		toolbar6:dynm_toolbar6,			
		toolbar7:dynm_toolbar7,
		toolbar8: 'nanospell nanospelllanguage suggestions | newquery removequery prequery nextquery | insertcomments removecomment precomment nextcomment | ice_toggleshowchanges | showmarkup | showcolorformat | trackaccept trackreject pretrack nexttrack | qccheck',
		toolbar9: 'eqnRenumber revertEqn mathmarker generatemath',
		// toolbar9:dynm_toolbar9,
		
		//toolbar3: dynamic_toolbar,
		/*toolbar3: 'xml_download | html_download | pdf_download | latex_download | docx_download | reviewdocx_download | meta_download | UP_STEP11', 
        toolbar4: 'ParagraphStyles  PE_STEP1 PE_STEP2 Bib_Structure_New REF_STRUCTURE PE_STEP4 PE_STEP5 PE_STEP25 PE_STEP17 PE_STEP3 PE_STEP6 PE_STEP7 PE_STEP8 PE_STEP13 PE_STEP11 Companylogo ', //PE_STEP0 PE_STEP9 PE_STEP10 PE_STEP12 BackButton
        toolbar5: 'InsertFig', // BackButton
        toolbar6: 'XML_STEP4  pdfviewer generatexml XML_STEP4_NEW preview_pdf generate_indesign_pdf', // XML_STEP1 XML_STEP2 XML_STEP3 XML_STEP5 XML_STEP6 GenerateLatex  BackButton Move2_3B2
        toolbar7: 'PStyles CStyles  Link_styles MathEditor  Query Help RefEditor ListQuery GotoReference  QCReport RevertFM RerunFM GenerateWebPDF ampackage generatemetaxml', //GenerateMetaXML CrossrefConnection RefManualStructure insertlink accession pdfviewer RStyles
        toolbar8: ' ReferenceCitation UKUS GMR BinomialCheck AbbrCheck CommentList Hyphen Uncite spellchecker preprint proofpdf CEautomation RefList', //BinomialCitation FIGLIST Enzyme Latin Uncitedcitation  Link_styles spellcheck Uncited QC_Check_Error 
        toolbar9: ' GenerateLatex latexpdf GenerateDVI', //BinomialCitation FIGLIST Enzyme Latin Uncitedcitation
		*/
		//toolbar_mode: 'wrap',
		readonly: isreadonly,
        save_enablewhendirty: false,
        lineheight_formats: "8pt 9pt 10pt 11pt 12pt 14pt 16pt 18pt 20pt 22pt 24pt 26pt 36pt",
        autosave_retention: "1m",
        save_onsavecallback: function (t) {
            saveThisFile();
        },
        ice: {
            user: {name: usname, id: userid},
            titleDateFormat: 'd/m/Y h:ia',
            mergeBlocks: false,
            preserveOnPaste: 'p,a[href|class],i,em,b,span',
            deleteTag: 'del',
            insertTag: 'ins'
        },
        extended_valid_elements: "insert,delete",

        content_css: [base_url + "assets/editor/ice/tinymce4_plugin/css/ice.css?v=10"], //, base_url + "math_css/mathequation.css?v=1"
        nanospell_server: "php",
        nanospell_dictionary: 'en',
        nanospell_autostart: false,
        nanospell_ignore_words_with_numerals: true,
        nanospell_ignore_block_caps: false,
        nanospell_compact_menu: false,
        autosave_ask_before_unload: false,
        /* init_instance_callback : "updateFunctionTimeOut", */
        init_instance_callback: function (editor) {
			
			//sankar  - undo redo set cursor and view element  - start
            editor.on('ExecCommand', function (e) {
                if (e.command.toLowerCase() == 'undo' || e.command.toLowerCase() == 'redo') {
                    var elmnt_iframe_pos = getCoords($("#example_ifr")[0]);
                    var elmnt_pos = getCoords(tinyMCE.activeEditor.selection.getNode());
                    if (elmnt_pos.top < elmnt_iframe_pos.top || elmnt_pos.bottom > elmnt_iframe_pos.bottom) {
                        tinyMCE.activeEditor.selection.getNode().scrollIntoView(true);
                    }
                }
            });
            //sankar  - undo redo set cursor and view element  - end
			
            //sankar
            editor.on('Click', function (e) {
                if (e.target.className.toLowerCase() === "ui-pag" && e.target.nodeName.toLowerCase() === "span") {                   
                    $(tinyMCE.activeEditor.dom.select('span.uipag-active')).removeClass('uipag-active');
                    // $(e.target).addClass('uipag-active');
                    // if ($(".mce-nstylesdiv").hasClass("mce-active") == false) {
                        // jQuery('.loader').show();
                        // $('.mce-nstylesdiv').trigger('click');
                        // setTimeout(function () {

                        // }, 10);
                        // jQuery('.loader').hide();
                    // }
					if ($(".mce-nstylesdiv").hasClass("mce-active") == true) {
						pagstyleid = e.target.getAttribute("id");
						Edit_pagstyle(e.target.getAttribute("id"));
						$(e.target).addClass('uipag-active');
					}
                }
            }),
            editor.on('DblClick', function (e) {
			
				//nagarajbabu added tis for firefox issue
				var chk_path = (e.path) ? (e.path) : (composedPath(e.target));		
				
                if (e.target.nodeName === "IMG" || e.target.nodeName === "img")
                {
                    var img = editor.selection.getNode();
                    $imgclass = img.getAttribute("class");

                    if ($imgclass == "disp" || $imgclass == "inline")
                    {
                        maedit = true
                        //$('.mce-MathEditor').trigger('click');
                        $clid = "";
                        $("button[role='presentation']").each(function (index)
                        {

                            if ($(this).text() === "MathEditor")
                            {
                                if ($imgclass == "inline")
                                {
                                    $newmathtype = "inl_math";
                                } else if ($imgclass == "disp")
                                {
                                    $newmathtype = "disp_math";
                                }

                                $clid = $(this).parent().attr("id");
                            }

                        });
                        $('#' + $clid).trigger('click');
                        // $('#mceu_32').trigger('click');
                    } else
                    {

                    }
                }
                /*else if((e.target.nodeName === "span" || e.target.nodeName === "SPAN" ) && e.target.className =="REPLACEREF")
                 {
                 
                 
                 // var element = editor.dom.getParent(editor.selection.getNode(), 'span');
                 var element1 = editor.selection.getNode();
                 var element = element1.parentNode;
                 var element2 = editor.dom.getParent(editor.selection.getNode(), 'p');
                 
                 
                 $pp = element.getAttribute("class");
                 $pp=$pp.replace("DOIDATA-","");
                 $valu=element.innerHTML;
                 $valu = $valu.replace(/DOIDATA-/g,"");
                 
                 $valu = $valu.replace(/(<span class=\"MISMATCH)/g,"$11");
                 $valu = $valu.replace(/(&nbsp;<span class=\"REPLACEREF\"><\/span>)/g,"");
                 //
                 var spanelements = element2.childNodes;
                 var arrayLength = spanelements.length;
                 for (var i = 0; i < arrayLength; i++) 
                 {
                 if(spanelements[i].getAttribute("class") == $pp)
                 {
                 spanelements[i].innerHTML = $valu;
                 break;
                 }
                 }		
                 
                 }*/
                else if ((e.target.nodeName === "span" || e.target.nodeName === "SPAN") && e.target.className == "REPLACEREF")
                {

                    //alert();
                    // var element = editor.dom.getParent(editor.selection.getNode(), 'span');
                    var element1 = editor.selection.getNode();
                    var element = element1.parentNode;
                    var element2 = editor.dom.getParent(editor.selection.getNode(), 'p');


                    $pp = e.target.parentNode.getAttribute("class");
                    $pp = $pp.replace("DOIDATA-", "");
                    $valu = e.target.parentNode.innerHTML;
                    $valu = $valu.replace(/DOIDATA-/g, "");



                    $valu = $valu.replace(/(<span class=\"MISMATCH)/g, "$11");
                    $valu = $valu.replace(/(&nbsp;<span class=\"REPLACEREF\"><\/span>)/g, "");
                    var spanelements = element2.childNodes;
                    var arrayLength = spanelements.length;
                    for (var i = 0; i < arrayLength; i++)
                    {
                        if (spanelements[i].getAttribute("class") == $pp)
                        {
                            spanelements[i].innerHTML = $valu;
                            break;
                        }
                    }

                } else if ((e.target.nodeName === "span" || e.target.nodeName === "SPAN") && e.target.className == "AUTHOR-COMMENT")
                {
                    $COMMENTVAL = e.target.getAttribute("data-comment");
                    $dataid = e.target.getAttribute("data-id");
                    Insertcomment($COMMENTVAL, "old", $dataid);


                } //nagarajbabu added tis for affiliation double click
				else if ((e.target.nodeName === "span" || e.target.nodeName === "SPAN") && e.target.parentNode.className == "Affiliation"){					
					affiliation_form_popup_load();
				} 				
				else if ((e.target.nodeName === "span" || e.target.nodeName === "SPAN") && (chk_path[2].className == "AuthorGroup" || chk_path[2].className == "Author" || chk_path[3].className == "AuthorGroup" || chk_path[3].className == "Author" )){					
					authorgroup_form_popup_load();
				} 		
				else if ((e.target.nodeName === "span" || e.target.nodeName === "SPAN") && tinymce.activeEditor.dom.getParent(e.target, 'span.MISMATCH') != null){

                    // loading sweetalert css
                    let css_file_Added = $('<link type="text/css" href="'+$HOSTNAME+'/Integra/EditPlus/ce_editor/Support/sweetalert/dist/sweetalert.css" id="forCrossref_css" rel="stylesheet"/>');
                    document.head.append(css_file_Added[0]);
                    // loading sweetalert css

                    let get_doiref_element = tinymce.activeEditor.dom.getParent(e.target, 'span.DOIREF');
                    let get_doiref_children = get_doiref_element.children;
                    let selectedGrp_element, selectedGrp_element_clsAttr;

                    // finding the crt group element in clicked mismatch present
                    for(let gdc=0; gdc<get_doiref_children.length; gdc++){
                        let get_className = get_doiref_children[gdc].getAttribute('class');
                        if(tinymce.activeEditor.dom.getParent(e.target, '.'+get_className) != null){
                            selectedGrp_element = get_doiref_children[gdc];
                            selectedGrp_element_clsAttr = get_className;
                            break;
                        }
                    }
                    // finding the crt group element in clicked mismatch present

                    let get_click_trigger_element = selectedGrp_element_clsAttr.replace("DOIDATA-", "");
                    let get_block_element = tinyMCE.activeEditor.dom.getParent(e.target, 'p');
                    $indata = get_block_element.querySelector('span.'+get_click_trigger_element).innerHTML;
                    $outData = selectedGrp_element.innerHTML;
                    $.getScript( $HOSTNAME+"/Integra/EditPlus/ce_editor/Support/sweetalert/dist/sweetalert.min.js", function(){
                        swal({
                            title: "Are you sure?",
                            html:true,
                            text: "<div style='height:auto;'><b>Input Data : </b> "+$indata+" <br/><br/> <b> Cross Ref Data : </b> "+$outData+" </div>",
                            confirmButtonColor: "#DD6B55",
                            confirmButtonText: "Accept",
                            showCancelButton: true,
                            cancelButtonText:"Reject",
                            closeOnConfirm: false
                        },
                        function(e)
                        {
                            if(e === true){
                                swal.close();
                                $outData = $outData.replace("<ins class=\"ins\">","<span class='ins'>");
                                $outData = $outData.replace("</ins>","</span>");
                                
                                $removed_doidata = $outData.replace(/DOIDATA-/g,"");

                                let removed_mismatch_tag = removeElementUsingClass($removed_doidata, "MISMATCH");
                                get_block_element.querySelector('span.'+get_click_trigger_element).innerHTML = removed_mismatch_tag.innerHTML;

                                let removed_mismatch_crosstag = removeElementUsingClass($outData, "MISMATCH");
                                selectedGrp_element.innerHTML = removed_mismatch_crosstag.innerHTML;
                                $('#forCrossref_css').remove();
                            }
                            else{
                                $('#forCrossref_css').remove();
                            }
                        })
                    })
                }
				else
                {					
						var element2 = editor.dom.getParent(editor.selection.getNode(), 'span');
						var element22 = editor.dom.getParent(editor.selection.getNode(), 'p');
				if(element2 != 	null)
				{
					var inlinemath = element2.closest("span.inline,span.disp");
					var inlinemathlabel = element2.closest("span.EQLABEL");
					var Before_math_Content = '';
                    var After_math_Content = '';
					 
					if(inlinemath != 	null)
					{
						//sankar
                        var rgxstage = new RegExp("CORRECTION\\d+", "gi");
                        var rslt_matcx = stageId.match(rgxstage);

                        if (rslt_matcx) {
                            tinyMCE.activeEditor.windowManager.alert("Correction stage not allowed to edit equations");
                            return;
                        }
                       //sankar
					   
					//debugger;
						//var txt = $(inlinemath).find('script').html();
						var txt = $(inlinemath).find('.TEX').html();
						//var labeltxt = $(inlinemath).find('span.EQLABEL').html();
						//console.log(txt+"===>>>>");
						var idsss=$(element22).find('.EQLABEL').html();
						
						//console.log(idsss+"**************"+inlinemathlabel);
						txt = txt.replace(/\n/g," ");
						txt = txt.replace("$$","");
						txt = txt.replace("$$","");
						txt = txt.replace(/\/\/\s*\<\!\[CDATA\[(.*?)\/\/\s*\]\]\>/g,"$1");
						txt = $.trim(txt);
						Before_math_Content = txt;
						
						$.ajax({
							'async': false,
							'type': "POST",
							'global': false,
							'dataType': 'html',
							'url': base_url+'home/writmath',
							data:{data:txt},
							'success': function (data) {
								// alert(data);				
							}
						});
						
						$scriptid = $(inlinemath).find('script').attr("id");
						$mathid = element2.getAttribute("id");
						$mathclass = element2.getAttribute("class");
					
					jQuery(this).each(function(){
						//parent.tinymce.activeEditor.windowManager.close();
					});
					
					editor.windowManager.open({
						title: 'Math Editor',
						url: $VisualMathEditor+"&id="+idsss,
						buttons: [{
                            text: 'Save',
                            subtype: 'primary',
                            onclick: function(e) {
								  // debugger;
								  jQuery('.loader').show();
								 $TexMath = $('iframe').contents().find('#mathVisualOutput script').text();
								$('iframe').contents().find('#OutputHTML').html("$$"+$TexMath+"$$");
                                $.getScript($MathJax_link, function() {
                                    MathJax.Hub.Queue(["Typeset",MathJax.Hub,"OutputHTML"]);
                                    console.debug('MathJax Script loaded.');
                                  });
								// $("#eqla_input").val(idsss); 
								  
								  $.ajax({
						'async': false,
						'type': "POST",
						'global': false,
						'dataType': 'html',
						'url': base_url+'home/writmathhtml',
						data:{data:$TexMath,mathid:$mathid,mathclass:$mathclass},
						'success': function (data) {
							$('iframe').contents().find('#OutputHTML').html('<iframe id="Transmatheditor" src="'+data+'"></iframe>');	
							setTimeout(function(){
							//debugger;
								var dyn_css = $("iframe").contents().find("#OutputHTML").find("#Transmatheditor").contents().find("#MJX-CHTML-styles").html();	
								var iContentBody = $("iframe").contents().find("#OutputHTML");
								var divInnerFormText = $("iframe").contents().find("#OutputHTML").find("#Transmatheditor").contents().find("p").html();
										
								divInnerFormText = divInnerFormText.replace("<div ","<span ");
								divInnerFormText = divInnerFormText.replace("</div>","</span>");
								divInnerFormText = divInnerFormText.replace(/MathJax-Element-1/g,$scriptid);
								divInnerFormText = divInnerFormText.replace(/font-family: (.*?)-(italic)\;/g,"font-family: $1;font-style:$2;");
								divInnerFormText = divInnerFormText.replace(/font-family: (.*?)-(bold)\;/g,"font-family: $1;font-weight:$2;");
								
								divInnerFormText +='<span class="TEX">$$'+$TexMath+'$$</span>';
																						After_math_Content = $TexMath;
					
								var labelid=$("iframe").contents().find("div#eqla").find("#eqla_input").val();
								//debugger;
								//nagarajbabu added this for math equation dynamic css include to editor
								//var dyn_css = $("iframe").contents().find("#OutputHTML").find("#Transmatheditor").contents().find("#MJX-CHTML-styles").html();	
								//divInnerFormText +='<style class="innermathcls">'+dyn_css+'</style>';									
								////var css = document.createElement('style'); 	
								//css.type = 'text/css';
								//css.id = 'innermathcls'; 		
								//if (css.styleSheet)  
									//css.styleSheet.cssText = dyn_css; 
								//else  
									//css.appendChild(document.createTextNode(dyn_css)); 	
								//tinyMCE.editors[0].contentWindow.document.head.appendChild(css); 			
												
										
								$(element2).html(divInnerFormText);
								if (Before_math_Content != After_math_Content) {
                                                $(element2).attr('data-edit', 'user');
                                            }

								if($mathclass=="disp"){
									if(idsss==undefined && labelid!=""){
										
										$( element2 ).append( "<span class=\"EQLABEL\">"+labelid+"</span></p>" );	
										
									}else if(idsss!=undefined && labelid!=""){
										$(element22).find('.EQLABEL').html(labelid);			
										
									}
									else if(idsss!=undefined && labelid==""){
										$(element22).find('.EQLABEL').remove();			
										
									}			

									//var content = tinyMCE.editors[0].contentWindow.document.documentElement.outerHTML;
									//tinymce.activeEditor.setContent(content);	
								}
								var mathCssAppend = '<style type="text/css">'+dyn_css+'</style>';
								var orginalHTML_Content = tinyMCE.activeEditor.getContent();
								orginalHTML_Content = orginalHTML_Content.replace('<head>','<head>'+mathCssAppend);
								tinymce.activeEditor.setContent(orginalHTML_Content);
								$(tinymce.activeEditor.getBody()).eq(0).css({"zoom":"100%"});
							
								tinymce.activeEditor.windowManager.close();
								jQuery('.loader').hide();
							
							},5000);
							
						}
					});
									
										}
						   },
						   {
							  text: 'Cancel',
							  onclick: 'close'
						   }],
						width: 1000,
						height: 420,
					});	
						//$("iframe").contents().find("div#eqla").find("#eqla_input").val(idsss);
					}
				}
				
				
                    /*
                     var ed = tinyMCE.activeEditor;
                     var element = ed.dom.getParent(ed.selection.getNode(), 'div');
                     $divtype = element.getAttribute("class");
                     if($divtype =="references")
                     {	
                     refedit = true
                     var refpara = tinymce.activeEditor.dom.select('p');
                     $( refpara ).each(function() {
                     var refeditattr = $(this).attr("ref-edit");
                     if(refeditattr != undefined && refeditattr =="refedit"){
                     //alert(refeditattr);
                     $(this).removeAttr("ref-edit");
                     }
                     });
                     
                     var element = ed.dom.getParent(ed.selection.getNode(), 'p');
                     var refpara = element.outerHTML;
                     
                     element.setAttribute("ref-edit","refedit");			
                     $reftext = element.innerHTML;
                     
                     
                     
                     $clid = "";
                     $( "button[role='presentation']" ).each(function( index ) 
                     {
                     if($( this ).text() === "RefManualStructure")
                     {	
                     $clid = $( this ).parent().attr("id");
                     }
                     
                     });
                     $('#'+$clid).trigger('click');
                     
                     
                     var refpara1 = tinymce.activeEditor.dom.select('p');
                     $( refpara1 ).each(function() 
                     {
                     var refeditattr1 = $(this).attr("ref-edit");
                     //alert(refeditattr1);
                     if(refeditattr1 != undefined && refeditattr1 =="refedit"){
                     
                     var edimg1=tinyMCE.get('example');
                     $(this)[0].scrollIntoView(true);
                     edimg1.focus();
                     return false;
                     }
                     });
                     
                     
                     }
                     else
                     {
                     refedit = false;
                     }
                     
                     
                     
                     
                     maedit = false;
                     
                     */
                }

            });


        },
//adding button inside this editor setup
        setup: function (ed)
        {
            ed.addButton('PE_STEP17', {
                text: 'NUM 2 NAME',
                onclick: function () {
                    //PE_STEPS("17","manual");
                    tinyMCE.activeEditor.windowManager.open({
                        title: 'NUM 2 NAME',
                        width: 250,
                        height: 150,

                        body: [
                            {
                                type: 'radio',
                                name: 'type1',
                                label: 'Type1',
                                role: "radio",
                                classes: "radio",
                                text: ' Ex:(1)'

                            },

                            {
                                type: 'radio',
                                name: 'type2',
                                label: 'Type2',
                                classes: 'what',
                                text: ' Ex:[1]'

                            },
                            {
                                type: 'radio',
                                name: 'type3',
                                label: 'Type3',
                                classes: 'what',
                                text: ' Ex:sup'
                            }
                        ],

                        onsubmit: function (e) {

                            $sno = "17";
                            if (e.data.type1 == true) {

                                var ed = tinyMCE.activeEditor;
                                ed.setProgressState(1); // Show progress
                                $.ajax({
                                    'async': false,
                                    'type': "POST",
                                    'global': false,
                                    'dataType': 'html',
                                    'url': base_url + 'home/PE_STEPS',
                                    data: {sno: $sno, tp: "TYPE1"},
                                    'success': function (data)
                                    {

                                        $rs = data;

                                        if ($rs.startsWith("Error"))
                                        {


                                            tinyMCE.activeEditor.windowManager.alert($rs);
                                            ed.setProgressState(0); // Hide progress

                                        } else
                                        {
                                            var content = ed.getContent();
                                            ed.setContent($rs);
                                            //refreshParastyleFunction();

                                            ed.setProgressState(0);

                                            if ($sno == 17)
                                            {

                                                tinyMCE.activeEditor.windowManager.alert("TYPE1 NUM 2 AUTH Completed");
                                            }



                                        }



                                    }
                                });
                            } else if (e.data.type2 == true) {

                                var ed = tinyMCE.activeEditor;
                                ed.setProgressState(1); // Show progress
                                $.ajax({
                                    'async': false,
                                    'type': "POST",
                                    'global': false,
                                    'dataType': 'html',
                                    'url': base_url + 'home/PE_STEPS',
                                    data: {sno: $sno, tp: "TYPE2"},
                                    'success': function (data)
                                    {

                                        $rs = data;

                                        if ($rs.startsWith("Error"))
                                        {


                                            tinyMCE.activeEditor.windowManager.alert($rs);
                                            ed.setProgressState(0); // Hide progress

                                        } else
                                        {
                                            var content = ed.getContent();
                                            ed.setContent($rs);
                                            //refreshParastyleFunction();

                                            ed.setProgressState(0);

                                            if ($sno == 17)
                                            {

                                                tinyMCE.activeEditor.windowManager.alert("TYPE2 NUM 2 AUTH Completed");
                                            }



                                        }



                                    }
                                });
                            } else if (e.data.type3 == true) {
                                var ed = tinyMCE.activeEditor;
                                ed.setProgressState(1); // Show progress
                                $.ajax({
                                    'async': false,
                                    'type': "POST",
                                    'global': false,
                                    'dataType': 'html',
                                    'url': base_url + 'home/PE_STEPS',
                                    data: {sno: $sno, tp: "TYPE3"},
                                    'success': function (data)
                                    {

                                        $rs = data;

                                        if ($rs.startsWith("Error"))
                                        {


                                            tinyMCE.activeEditor.windowManager.alert($rs);
                                            ed.setProgressState(0); // Hide progress

                                        } else
                                        {
                                            var content = ed.getContent();
                                            ed.setContent($rs);
                                            //refreshParastyleFunction();

                                            ed.setProgressState(0);

                                            if ($sno == 17)
                                            {

                                                tinyMCE.activeEditor.windowManager.alert("TYPE3 NUM 2 AUTH Completed");
                                            }



                                        }



                                    }
                                });
                            }

                        }

                    });
                }
            });
			
			ed.addButton('PE_STEP18', {
                text: 'NAME 2 NUM',
                onclick: function () {
                    //PE_STEPS("17","manual");
                    tinyMCE.activeEditor.windowManager.open({
                        title: 'Author et al no.',
                        width: 400,
                        height: 150,
						//body: {type: 'textbox', name: 'file_name', id: 'file_name', label: 'Enter Refence Number', placeholder: 'Enter Refence Number'},
                        body: [
                            {
                                type: 'textbox',
                                name: 'Name_2_Num',
                                label: 'Number of Author to Retain',
								id: 'Author_retainval',                                
                                classes: "Name_2_Num_cls"                                
                            }
                        ],

                        onsubmit: function (e) {
							//debugger;
                            $sno = "133";
                            var ed = tinyMCE.activeEditor;
							$get_input_val= $('#Author_retainval').val()
                            ed.setProgressState(1); // Show progress
							$.ajax({
								'async': false,
								'type': "POST",
								'global': false,
								'dataType': 'html',
								'url': base_url + 'home/Name_2_Num',
								data: {sno: $sno, tp: $get_input_val},
								'success': function (data)
								{
									//debugger;
									//$rs = data;
									if(data=="Success")
									{
										tinyMCE.activeEditor.windowManager.alert("Process completed..!");
									}
									else
									{
										tinyMCE.activeEditor.windowManager.alert("Process not completed. File is missing");
									}
								}
							});
							ed.setProgressState(0);							
							location.reload();
                        }

                    });
                }
            });
			//added by sathish-start
			ed.addButton('PE_STEP19', {
                text: 'Ref-Renumber',
				classes: "Ref_Renumber",
                onclick: function () {
					// debugger;
                    $sno = "1";
                    var ed = tinyMCE.activeEditor;
					ed.setProgressState(1); // Show progress
					$.ajax({
						'async': false,
						'type': "POST",
						'global': false,
						'dataType': 'html',
						'url': base_url + 'home/Ref_Renumber',
						data: {sno: $sno},
						'success': function (data)
						{
							// debugger;
							var split_data=data.split("$#%&");
							//$rs = data;
							if(split_data[1]=="fail")
							{
								rightSidePanelOpen("Ref-Renumber", $Ref_Renumber, {HOSTNAME: $HOSTNAME, VALIDATIONREPORT: split_data[0], DIFFERENCE: split_data[1]}, "70", "25");
							}
							else
							{
								rightSidePanelOpen("Ref-Renumber", $Ref_Renumber, {HOSTNAME: $HOSTNAME, VALIDATIONREPORT: split_data[1], DIFFERENCE: split_data[2]}, "70", "25");						
								ed.setContent(split_data[0]);
								tinyMCE.activeEditor.windowManager.alert("Process completed..!");
							}
						}
					});
					ed.setProgressState(0);
                }
            });
			//added by sathish-end

            ed.addButton('TableCitation', {
                text: 'Table Citation',
                tooltip: "Table",
                classes: "tbldiv",
                onclick: function () {
                    menuhide("Table Citation");

                    if ($rsdiv)
                    {
                        $rsdiv = false;

                        this.active(!this.active());
                        var state = this.active();

                        rightsideview = false;
                        tbldiv = false;
                        $('.RightSidePanel').parent().removeClass("padding-rightbody");
                        $('.RightSidePanel').remove();
                        $('#refreshParastyle').hide();

                        if (leftsideview)
                        {
                            $('#example_ifr').css('width', '100%');
                            $('#example_ifr').css('margin-left', '0%');
                            $('#example_ifr').css('padding-left', '5px');
                        } else
                        {
                            $('#example_ifr').css('width', '100%');
                        }
                    } else
                    {
                        $rsdiv = true;


                        this.active(!this.active());
                        var state = this.active();

                        if (!state)
                        {
                            this.active(!this.active());
                        }

                        rightsideview = true;
                        tbldiv = true;
                        var ed = tinyMCE.activeEditor.getBody();

                        var div_id = $('#example_ifr').parent().attr('id');
                        var iframe_h = $('#example_ifr').height();
                        var body_div = $('#' + div_id).height();
                        var prev_elem = $('#' + div_id).prev().height();
                        var prev_elem1 = $('#' + div_id).prev().prev().height();
                        var total_height = parseInt(prev_elem) + parseInt(prev_elem1) + parseInt(8);
                        $('#example_ifr').parent().addClass("padding-rightbody");

                        $('#example_ifr').parent().append("<div class='RightSidePanel'><div class='Parastyles' style='position:relative;left:0;'><div id='pstyleslist'  style='width:28%'></div></div> ");

                        $("#pstyleslist").load(BIN_URL, function ()
                        {
                        });

                        if (leftsideview)
                        {
                            $('#example_ifr').css('width', '60%');
                            $('#example_ifr').css('margin-left', '10%');
                            $('#example_ifr').css('padding-left', '5px');
                        } else
                        {
                            $('#example_ifr').css('width', '70%');
                        }

                        $('.RightSidePanel').css('top', total_height + 'px');
                        $('.RightSidePanel').css('height', iframe_h);

                        var myStringArray = getNodeList(tinyMCE.activeEditor.getBody());
                        var scroll = tinymce.DOM.getViewPort(tinymce.activeEditor.getWin()).y;
                        $(".RightSidePanel").scrollTop(scroll);

                        $('.RightSidePanel').css('height', iframe_h);
                    }
                }
            });

            ed.addButton('PE_STEP0', {
                text: 'Auto Structure',
                onclick: function () {
                    //ed.checkProcess();
                    //tinyMCE.activeEditor.windowManager.alert("Auto Structure");
                    Auto_Structure();

                }
            });
            ed.addButton('PE_STEP1', {
                text: 'Pre Structure',
                onclick: function () {
                    PE_STEPS("1", "manual");

                }
            });

            ed.addButton('PE_STEP2', {
                text: 'FM Structure',
                onclick: function () {
                    //ed.checkProcess();
                    PE_STEPS("2", "manual");
                }
            });

            ed.addButton('Bib_Structure', {
                text: 'Bib Structure',
                onclick: function () {
                    //ed.checkProcess();
                    AllReferences("manual");

                }
            });
            ed.addButton('Bib_Structure_New', {
                text: 'Bib Structure New',
                onclick: function () {
                    AllReferencesNew("manual");

                }
            });

            ed.addButton('REF_STRUCTURE', {
                text: 'REF_STRUCTURE',
                onclick: function () {
                    REF_STRUCTURE("14", "manual");

                }
            });
			
			ed.addButton('dupli_ref', {
                text: 'Duplicate Reference',
                onclick: function () {
                    jQuery('.loader').show();
                    $.ajax({
                        async: false,
                        type:'POST',
                        gobal: false,
                        'dataType': 'html',
                        url: base_url + 'home/numbered_Revert_Citation',
                        data:{button_Name: 'Duplicate_Reference', number_Run_Perl: '33'},
                        success:function(response){
                            if(response != "unable to open file!"){
                                tinyMCE.activeEditor.setContent(response);
                            }else{
                                tinyMCE.activeEditor.windowManager.alert('Not Success!');
                            }
                            jQuery('.loader').hide();
                        }
                    });
                }
            });
			
			ed.addButton('num_citation', {
                text: 'Number Citation',
                onclick: function () {
                    var get_refLink_Tag = tinyMCE.activeEditor.contentDocument.querySelectorAll("a.REFLINK");
                    if(get_refLink_Tag.length == 0)
                    {
                        tinyMCE.activeEditor.windowManager.close();
                        tinyMCE.activeEditor.windowManager.open({
                            title: "Number Citation",
                            html: '<div id="Number_citation"><p style="margin-top: 25px;margin-left: 75px;"><span style="font-size: 16px;font-weight: 700;font-family: \'Century Gothic\';">Type1</span><input type="radio" name="n_cite" value="TYPE1" checked style="font-family: \'Century Gothic\'; margin-left: 23px;margin-top: 4px;margin-right: 5px;"><span style="margin-top: 2px !important;position: absolute;font-family: \'Century Gothic\';">Ex:(1)</span></p><p style="margin-top: 10px;margin-left: 75px;"><span style="font-size: 16px;font-weight: 700;font-family: \'Century Gothic\';">Type2</span><input type="radio" name="n_cite" value="TYPE2" style="margin-left: 23px;margin-top: 4px;margin-right: 5px;font-family: \'Century Gothic\';"><span style="margin-top: 2px !important;position: absolute;font-family: \'Century Gothic\';">Ex:[1]</span></p><p style="margin-top: 10px;margin-left: 75px;"><span style="font-size: 16px;font-weight: 700; font-family: \'Century Gothic\';">Type3</span><input type="radio" name="n_cite" value="TYPE3" style="font-family: \'Century Gothic\'; margin-left: 23px;margin-top: 4px;margin-right: 5px;"><span style="margin-top: 2px !important;position: absolute;font-family: \'Century Gothic\';">Ex:<sup style="font-size: 10px;">1</sup></span></p></div>',
                            width: 300,
                            height: 120,
                            buttons: [{
                                text: "OK",
                                onclick: function () {
                                    var get_Radio_Button_value = $("input[name='n_cite']:checked").val();
                                    tinyMCE.activeEditor.windowManager.close();
                                    jQuery('.loader').show();
                                    $.ajax({
                                        async: false,
                                        type:'POST',
                                        gobal: false,
                                        'dataType': 'html',
                                        url: base_url + 'home/numbered_Revert_Citation',
                                        data:{type: get_Radio_Button_value, button_Name: 'Numbered_Citation', number_Run_Perl: '30'},
                                        success:function(response){
                                            if(response != "unable to open file!"){
                                                tinyMCE.activeEditor.setContent(response);
                                            }else{
                                                tinyMCE.activeEditor.windowManager.alert('Not Success!');
                                            }
                                        }
                                    });
                                    jQuery('.loader').hide();
                                }
                            }, {
                                text: "Close",
                                onclick: "close"
                            }]
                        });
                    }
                    else
                    {
                        tinyMCE.activeEditor.windowManager.alert("Please Revert Citation .... ");
                    }
                }
            });
			ed.addButton('r_citation', {
                text: 'Revert Citation',
                onclick: function () {
                    jQuery('.loader').show();
                    $.ajax({
                        async: false,
                        type:'POST',
                        gobal: false,
                        'dataType': 'html',
                        url: base_url + 'home/numbered_Revert_Citation',
                        data:{button_Name: 'Revert_Citation', number_Run_Perl: '31'},
                        success:function(response){
                            if(response != "unable to open file!"){
                                tinyMCE.activeEditor.setContent(response);
                            }else{
                                tinyMCE.activeEditor.windowManager.alert('Not Success!');
                            }
                        }
                    });
                    jQuery('.loader').hide();
                }
            });

            ed.addButton('PE_STEP3', {
                text: 'Citations',
                onclick: function () {
                    PE_STEPS("3", "manual");

                }
            });

            ed.addButton('PE_STEP4', {
                text: 'DOI Insertion',
                onclick: function () {
                    PE_STEPS("4", "manual");

                }
            });

            ed.addButton('PE_STEP5', {
                text: 'CrossRef Validation',
                onclick: function () {
                    PE_STEPS("5", "manual");

                }
            });
            ed.addButton('PE_STEP6', {
                text: 'Binomial',
                onclick: function () {
                    //PE_STEPS("6","manual");
                    REF_STRUCTURE("60", "manual");

                }
            });
            ed.addButton('PE_STEP7', {
                text: 'Enzyme',
                onclick: function () {
                    PE_STEPS("7", "manual");
                }
            });
            ed.addButton('PE_STEP8', {
                text: 'LatinTerms',
                onclick: function () {
                    PE_STEPS("8", "manual");

                }
            });
            ed.addButton('PE_STEP9', {
                text: 'Generate LaTeX',
                onclick: function () {
                    html2latex();
                }
            });

            ed.addButton('PE_STEP10', {
                text: 'Generate PDF',
                classes: "GeneratePDF",
                onclick: function () {
                    latex2pdf();

                }
            });
            ed.addButton('PE_STEP12', {
                text: 'Apply AUGRP',
                classes: "ApplyAUGRP",
                onclick: function () {
                    PE_STEPS("12", "manual");
                }
            });

            ed.addButton('PE_STEP13', {
                text: 'Auto Query',
                classes: "AutoQuery",
                onclick: function () {
                    PE_STEPS("64", "manual");
                }
            });
            ed.addButton('CE_AUTOMATION', {
                text: 'CE AUTOMATION',
                classes: "AutoQuery",
                onclick: function () {
                    ce_automation("101");
                }
            });

            ed.addButton('PE_STEP25', {
                text: 'Alphabetical Order',
                classes: "Alphabetical_Order",
                onclick: function (e) {
                    var s = confirm("Please Edit and Complete the References before running Alphabetical order\n\n Press \"OK\" to Run Alphabetical Order or Press \"Cancel\" to Edit References");
                    //var s = confirm("Please Edit and Complete the References before running Alphabetical order\n\n Press "+<b>+"\"OK\"" +</b>+"to Run Alphabetical Order or Press \"Cancel\" to Edit References");
                    if (s == true)
                    {
                        PE_STEPS("25", "manual");

                    } else if (s == false)
                    {
                        e.preventDefault();
                        return false;
                    }

                }
            });

            ed.addButton('XML_STEP1', {
                text: 'Generate XML',
                onclick: function () {
                    var edt = tinyMCE.activeEditor;
                    edt.setProgressState(1); // Show progress
                    setTimeout(function ()
                    {

                        var exist_file_id = $('#exist_file_id').val();
                        var exist_file_name = $('#exist_file_name').val();
                        var exist_file_path = $('#exist_file_path').val();
                        var ed = tinyMCE.get('example');

                        $.ajax({
                            url: base_url + 'home/exist_save_file',
                            type: 'POST', //exist_file_id:exist_file_id,
                            data: {exist_file_name: exist_file_name, exist_file_path: exist_file_path, text: ed.getContent()},
                            success: function (result) {


                                $.ajax({
                                    'async': false,
                                    'type': "POST",
                                    'global': false,
                                    'dataType': 'html',
                                    'url': base_url + 'home/PE_STEPS',
                                    data: {sno: "122"},
                                    'success': function (data)
                                    {
                                        $rs = data;
                                        if ($rs.startsWith("Error"))
                                        {

                                            tinyMCE.activeEditor.windowManager.alert($rs);


                                        } else
                                        {
                                            var ed = tinyMCE.get('example');
                                            var content = ed.getContent();
                                            ed.setContent($rs);
                                            refreshParastyleFunction();


                                            //// Read the QC Report Status /////
                                            $Element = document.createElement('div');
                                            $($Element).addClass("AUS");
                                            $($Element).html($rs);
                                            // alert($($Element).find(".QCCHECK").length);
                                            if ($($Element).find(".QCCHECK").length === 0)
                                            {
                                                XMLCreation("manual");
                                                edt.setProgressState(0); // hide progress
                                            } else
                                            {

                                                var qchtml = "";
                                                $rsdiv = true;

                                                rightsideview = true;
                                                cstylesdiv = true;
                                                var ed = tinyMCE.activeEditor.getBody();

                                                var div_id = $('#example_ifr').parent().attr('id');
                                                var iframe_h = $('#example_ifr').height();
                                                var body_div = $('#' + div_id).height();
                                                var prev_elem = $('#' + div_id).prev().height();
                                                var prev_elem1 = $('#' + div_id).prev().prev().height();
                                                var total_height = parseInt(prev_elem) + parseInt(prev_elem1) + parseInt(8);
                                                $('#example_ifr').parent().addClass("padding-rightbody");

                                                $('#example_ifr').parent().append("<div class='RightSidePanel'><div class='Parastyles' style='position:relative;left:0;'><div id='pstyleslist'  style='width:28%'></div></div> ");

                                                $("#pstyleslist").load($styleval, {HOSTNAME: $HOSTNAME, filepath: qchtml}, function ()
                                                {
                                                });
                                                if (leftsideview)
                                                {
                                                    $('#example_ifr').css('width', '60%');
                                                    $('#example_ifr').css('margin-left', '10%');
                                                    $('#example_ifr').css('padding-left', '5px');
                                                } else
                                                {
                                                    $('#example_ifr').css('width', '70%');
                                                }

                                                $('.RightSidePanel').css('top', total_height + 'px');
                                                $('.RightSidePanel').css('height', iframe_h);

                                                var myStringArray = getNodeList(tinyMCE.activeEditor.getBody());
                                                var scroll = tinymce.DOM.getViewPort(tinymce.activeEditor.getWin()).y;
                                                $(".RightSidePanel").scrollTop(scroll);

                                                $('.RightSidePanel').css('height', iframe_h);
                                                edt.setProgressState(0); // hide progress

                                            }

                                        }

                                    }
                                });
                            }
                        });
                    }, 10);

                }
            });
            ed.addButton('XML_STEP2', {
                text: 'XML Parser',
                onclick: function () {
                    $.ajax({
                        'async': false,
                        'type': "POST",
                        'global': false,
                        'dataType': 'html',
                        'url': base_url + 'home/XMLVALIDATE',
                        'success': function (data)
                        {
                            if (data == "success")
                            {
                                tinyMCE.activeEditor.windowManager.alert(data);
                            } else
                            {
                                tinyMCE.activeEditor.windowManager.alert(data);
                            }
                        }
                    });

                }
            });
            ed.addButton('XML_STEP3', {
                text: 'XML Viewer',
                onclick: function () {
                    //tinyMCE.activeEditor.windowManager.alert("XML Viewer");
                    var url = $HOSTNAME + "/Integra/EditPlus/ce_editor/xml_viewer/lensviewer/Viewer.php";
                    window.open(url, '_blank');

                }
            });
			
            ed.addButton('XML_STEP4', {
                text: 'Generate Review PDF',
                classes: "GenerateReviewPDF",
                onclick: function () {
                    GenerateReviewPDF();
                }
            });

			 ed.addButton('XML_STEP4_NEW', {
                text: 'Review PDF',
                classes: "GenerateReviewPDFNEW",
                onclick: function () {
                    GenerateReviewPDF_NEW();
                }
            });
			
            ed.addButton('XML_STEP5', {
                text: 'Generate - LaTeX PDF',
                classes: "GenerateLaTeXPDF",
                onclick: function () {
                    //GenerateReviewPDF();
                    REF_STRUCTURE("40", "manual");
                }
            });
	
            ed.addButton('XML_STEP6', {
                text: 'Generate Report PDF',
                classes: "GenerateReportPDF",
                onclick: function () {
                    GenerateReportPDF();
                }
            });
			
			
            ed.addButton('Move2_3B2', {
                text: 'Move to 3B2',
                classes: "Move2_3B2",
                onclick: function () {
                    var ed = tinyMCE.activeEditor;
                    ed.setProgressState(1); // Show progress
                    setTimeout(function () {
                        $.ajax({
                            'async': false,
                            'type': "POST",
                            'global': false,
                            'dataType': 'html',
                            'url': base_url + 'home/XMLCreation',
                            'success': function (data) {
                                $rs = data;

                                if ($rs.startsWith("Error"))
                                {
                                    tinyMCE.activeEditor.windowManager.alert($rs);
                                    ed.setProgressState(0); // Hide progress
                                } else
                                {
                                    ed.setProgressState(0); // Hide progress
                                    tinyMCE.activeEditor.windowManager.alert("XML Creation Completed");
                                    $.ajax({
                                        'async': false,
                                        'type': "POST",
                                        'global': false,
                                        'dataType': 'html',
                                        'url': base_url + 'home/XMLEDITORLINK',
                                        'success': function (data)
                                        {
                                            window.open(data, '_blank');
                                            $.ajax({
                                                'async': false,
                                                'type': "POST",
                                                'global': false,
                                                'dataType': 'html',
                                                'url': base_url + 'home/XMLVALIDATE',
                                                'success': function (data)
                                                {
                                                    if (data == "success")
                                                    {
                                                        tinyMCE.activeEditor.windowManager.alert(data);
                                                        $.ajax({
                                                            'async': false,
                                                            'type': "POST",
                                                            'global': false,
                                                            'dataType': 'html',
                                                            'url': base_url + 'home/MOVEXML',
                                                            'success': function (data)
                                                            {
                                                                tinymce.activeEditor.windowManager.alert("3B2 PDF created");
                                                                $.ajax({
                                                                    'async': false,
                                                                    'type': "POST",
                                                                    'global': false,
                                                                    'dataType': 'html',
                                                                    'url': base_url + 'home/PDFLINK',
                                                                    'success': function (data)
                                                                    {
                                                                        // alert(data);
                                                                        window.open(data, '_blank');
                                                                    }
                                                                });
                                                            }
                                                        });
                                                    } else
                                                    {
                                                        tinyMCE.activeEditor.windowManager.alert(data);
                                                    }
                                                }
                                            });
                                        }
                                    });
                                }

                            }
                        });
                    }, 100);
                }
            });
			
			
			/* made changes  by venkatesh k */
			ed.addButton('xml_download', {
                text: 'XML',
                classes: "xml_donload",
                onclick: function () {
					// debugger;
                    menuhide('Xml');
                    var custom_file_name = "no_custom";
                    $.ajax({
                        type: 'post',
                        url: base_url + "home/check_download_file_exist/" + custom_file_name + "/xml",
                        data: {},
                        success: function (response) {
                            if (response == "success") {
                                window.location = base_url + "home/downloadfile/" + custom_file_name + "/xml";
                            } else {
                                alert("Sorry this file not exist!..");
                            }
                        }
                    });


                }
            });
            ed.addButton('html_download', {
                text: 'HTML',
                classes: "html_download",
                onclick: function () {
                    menuhide('Html');
                    var custom_file_name = "no_custom";
                    $.ajax({
                        type: 'post',
                        url: base_url + "home/check_download_file_exist/" + custom_file_name + "/html",
                        data: {},
                        success: function (response) {
                            if (response == "success") {
                                window.location = base_url + "home/downloadfile/" + custom_file_name + "/html";
                            } else {
                                alert("Sorry this file not exist!..");
                            }
                        }
                    });

                }
            });
            ed.addButton('pdf_download', {
                text: 'Download proof pdf',
                classes: "pdf_download",
                onclick: function () {
                    menuhide('Download pdf');
                    var custom_file_name = "no_custom";
                    $.ajax({
                        type: 'post',
                        url: base_url + "home/check_download_file_exist/" + custom_file_name + "/pdf",
                        data: {},
                        success: function (response) {
                            if (response == "success") {
                                window.location = base_url + "home/downloadfile/" + custom_file_name + "/pdf";
                            } else {
                                alert("Sorry this file not exist!..");
                            }
                        }
                    });


                }
            });
            ed.addButton('latex_download', {
                text: 'Download latex',
                classes: "latex_download",
                onclick: function () {
                    menuhide('Download latex');

                    var custom_file_name = "no_custom";
                    $.ajax({
                        type: 'post',
                        url: base_url + "home/check_download_file_exist/" + custom_file_name + "/tex",
                        data: {},
                        success: function (response) {
                            if (response == "success") {
                                window.location = base_url + "home/downloadfile/" + custom_file_name + "/tex";
                            } else {
                                alert("Sorry this file not exist!..");
                            }
                        }
                    });


                }
            });
            ed.addButton('docx_download', {
                text: 'Download docx',
                classes: "docx_download",
                onclick: function () {
                    menuhide('Download docx');
                    var custom_file_name = "no_custom";
                    $.ajax({
                        type: 'post',
                        url: base_url + "home/check_download_file_exist/" + custom_file_name + "/docx",
                        data: {},
                        success: function (response) {
                            if (response == "success") {
                                window.location = base_url + "home/downloadfile/" + custom_file_name + "/docx";
                            } else {
                                alert("Sorry this file not exist!..");
                            }
                        }
                    });


                }
            });
            ed.addButton('reviewdocx_download', {
                text: 'Download review docx',
                classes: "reviewdocx_download",
                onclick: function () {
                    menuhide('Download review docx');
                    var custom_file_name = "REVIEW";
                    $.ajax({
                        type: 'post',
                        url: base_url + "home/check_download_file_exist/" + custom_file_name + "/docx",
                        data: {},
                        success: function (response) {
                            if (response == "success") {
                                window.location = base_url + "home/downloadfile/" + custom_file_name + "/docx";
                            } else {
                                alert("Sorry this file not exist!..");
                            }
                        }
                    });


                }
            });
            ed.addButton('meta_download', {
                text: 'Download meta',
                classes: "meta_download",
                onclick: function () {
                    menuhide('Download meta xml');
                    var custom_file_name = "metadata";
                    $.ajax({
                        type: 'post',
                        url: base_url + "home/check_download_file_exist/" + custom_file_name + "/xml",
                        data: {},
                        success: function (response) {
                            if (response == "success") {
                                window.location = base_url + "home/downloadfile/" + custom_file_name + "/xml   ";
                            } else {
                                alert("Sorry this file not exist!..");
                            }
                        }
                    });


                }
            });
			ed.addButton('TrackPDF_Download', {
                text: 'Track PDF',
                classes: "TrackPDF_Download",
                onclick: function () {
                    menuhide('Track PDF');
					var custom_file_name = "no_custom";
                    $.ajax({
                        type: 'post',
                        url: base_url + "home/check_download_file_exist/" + custom_file_name + "/trackpdf",
                        data: {},
                        success: function (response) {
                            if (response == "success") {
                                window.location = base_url + "home/downloadfile/" + custom_file_name + "/trackpdf";
                            } else {
                                alert("Sorry this file not exist!..");
                            }
                        }
                    });
				}
			});
			ed.addButton('NoTrackPDF_Download', {
                text: 'No Track PDF',
                classes: "NoTrackPDF_Download",
                onclick: function () {
                    menuhide('No Track PDF');
					var custom_file_name = "no_custom";
                    $.ajax({
                        type: 'post',
                        url: base_url + "home/check_download_file_exist/" + custom_file_name + "/notrackpdf",
                        data: {},
                        success: function (response) {
                            if (response == "success") {
                                window.location = base_url + "home/downloadfile/" + custom_file_name + "/notrackpdf";
                            } else {
                                alert("Sorry this file not exist!..");
                            }
                        }
                    });
				}
			});
			ed.addButton('Package_Download', {
                text: 'Package',
                classes: "Package_Download",
                onclick: function () {
                    menuhide('Package');
					var custom_file_name = "no_custom";
                    $.ajax({
                        type: 'post',
                        url: base_url + "home/check_download_file_exist/" + custom_file_name + "/zip",
                        data: {},
                        success: function (response) {
                            if (response == "success") {
                                window.location = base_url + "home/downloadfile/" + custom_file_name + "/zip";
                            } else {
                                alert("Sorry this file not exist!..");
                            }
                        }
                    });
				}
			});
		/*--------------nagarajbabu added this button for AM Tools - START  ---------*/	
			
            ed.addButton('GenerateWebPDF', {
                text: 'Generate WebPDF',
                classes: "GenerateWebPDF",
                onclick: function () {
                    PE_STEPS("113", "manual");
                }
            });
			 ed.addButton('ampackage', {
                text: 'AM Package',
                classes: "ampackage",
                onclick: function () {
                    PE_STEPS("8", "manual");
                }
            });
			// ed.addButton('GenerateMetaXML', {
                // text: 'Generate MetaXML',
                // classes: "GenerateMetaXML",
                // onclick: function () {
                    // //alert('GenerateMetaXML');
					// PE_STEPS("8", "manual");
                // }
            // });
			ed.addButton('XML_Viewer', {
                text: 'XML viewer',
                classes: "XML viewer",
                onclick: function () {
					jQuery('.loader').show();
                    setTimeout(function() {
                        $.ajax({
                            'async': false,
                            'type': "POST",
                            'global': false,
                            'dataType': 'html',
                            'url': base_url + 'home/XMLCreation',
                            'success': function (data) {
                                if(!data.startsWith("Error:: ")){
                                    $.ajax({
                                        'async': false,
                                        'type': 'POST',
                                        'global': false,
                                        'dataType': 'json',
                                        'url': base_url + "home/xml2html_JATS_Viewer/",
                                        'success': function (response) {
                                            if(response.rslt == 1){
                                                jQuery('.loader').hide();
                                                var win = window.open(response.filePath, '_blank');
                                                if (win) {
                                                    //Browser has allowed it to be opened
                                                    win.focus();
                                                } else {
                                                    //Browser has blocked it
                                                    alert('Please allow popups for this website');
                                                }
                                            }
                                            else{
                                                jQuery('.loader').hide();
                                                alert(response.filePath);
                                            }
                                        }
                                    });
                                }
                                else{
                                    jQuery('.loader').hide();
                                    alert("XML not generated!!! Please check with support team ...");
                                }
                            }
                        });

                    }, 200);
				}
            });

			ed.addButton('online_galley_pdf', {
                type: 'splitbutton',
                text: 'JX Formatter PDF',
                classes: "online_galley_pdf",
                menu: [ {text: "Direct PDF", onclick: function(){splitButton_JxFormatter("Direct_JXFormatterPDF")}},
                        {text: "PS PDF", onclick: function(){splitButton_JxFormatter("PS_JXFormatterPDF")}}
                    ]
            });		
						
			ed.addButton('preview_pdf', {
                text: 'Online Galley Proof',
                classes: "preview_pdf",
                onclick: function () {
					
					jQuery('.loader').show();
                    $.ajax({
                        type: 'post',
                        url: base_url + "home/preview_pdf/",
                        data: {},
                        success: function (response) {
							var win = window.open(response, '_blank');
							if (win) {
								//Browser has allowed it to be opened
								win.focus();
							} else {
								//Browser has blocked it
								alert('Please allow popups for this website');
							}
							jQuery('.loader').hide();
                        }
                    });

					
                }
            });			
						
		
			ed.addButton('generate_indesign_pdf', {
                text: 'PDF Galley Proof',
                classes: "generate_indesign_pdf",
                onclick: function () {
					
					jQuery('.loader').show();
                    $.ajax({
                        type: 'post',
                        url: base_url + "home/generate_indesign_pdf/",
                        data: {},
                        success: function (response) {
							/*
							var win = window.open(response, '_blank');
							if (win) {
								//Browser has allowed it to be opened
								//win.focus();
							} else {
								//Browser has blocked it
								alert('Please allow popups for this website');
							}
							*/
							alert("Success");
							jQuery('.loader').hide();
                        }
                    });

					
                }
            });	 	 
           
            // Mani.d Start
			
			ed.addMenuItem('ins-author-grp', {
                text: 'Ins-Author Group',
				classes:"ins-author-grp",	
                onclick: function () {
                    $('.RightSidePanel').remove();
                    $('#example_ifr').css('width', '100%');   
					$('#example_ifr').parent().append("<div class='RightSidePanel'><div class='Parastyles' style='position:relative;left:0;'><div id='pstyleslist' style='width:28%'></div></div>");
									
					$("#pstyleslist").load($ins_author_grp, {
						HOSTNAME: $HOSTNAME
						},				
					function () { 				
					});
                }
            });
            
			ed.addButton('latex_download', {
                text: 'Latex',
                classes: "latex_download",
                onclick: function () {
                    $.ajax({
                        type: 'post',
                        url: base_url + "home/check_download_file_exist/latex_download/tex",
                        data: {},
                        success: function (response) {
                            if (response == "success") {
                                window.location = base_url + "home/downloadfile/latex_download/tex";
                            }
                            else{
                                window.alert("file not found ...");
                            }
                        }
                    });
					
                }
            });	

            ed.addButton('latex_upload', {
                text: 'Latex Upload',
                classes: "latex_upload",
                onclick: function () {
                    tinyMCE.activeEditor.windowManager.close();
					tinyMCE.activeEditor.windowManager.open({
                        title: "Upload Tex File",
                        html: '<form method="post" action="" enctype="multipart/form-data" id="myform"><div style="padding-top:20px;margin-left:50px;"><input type="file" accept=".tex" id="file" name="file" /></div></form>',
                        width: 300,
                        height: 70,
                        buttons: [{
                            text: "Upload",
                            onclick: function () {
                                // debugger;
                                let fd = new FormData();
                                let files = $('#file')[0].files[0];
                                
                                if(files!=undefined)
                                {
                                    let filetype=files.name.match(/([^.]+$)/);
                                    if(filetype[0]=="tex")
                                    {
                                        fd.append('file', files);
                                        $.ajax({
                                            url: base_url + 'home/Upload_texfile',
                                            type:'post',
                                            data:fd,
                                            contentType: false,
                                            processData: false,
                                            success:function(response){
                                                // debugger;
                                                if(response == "success"){
                                                    alert('File uploaded successfully');
                                                }
                                                else if(response == "movefileerror"){
                                                    alert('File movement unsuccess');
                                                }
                                                else{
                                                    alert('File not uploaded');
                                                }
                                            }
                                        });
                                        $('.mce-close').trigger('click');
                                    }
                                    else
                                    {
                                        tinyMCE.activeEditor.windowManager.alert("Please select only tex file..!");
                                    }
                                }
                                else
                                {
                                    alert('Please select a file!');
                                }
                            }
                        }, {
                            text: "Close",
                            onclick: "close"
                        }]
                    });
                }
            });
			
			ed.addButton('print_pdf', {
                text: 'Print PDF',
                classes: "print_pdf",
                onclick: function () {
					rightSidePanelOpen("PRINT PDF", $jobOptions, {HOSTNAME: $HOSTNAME, DIFFERENCE: "Print_PDF", CUSTOM_FILE_NAME: "print_pdf", HOME_FUNC_NAME: "perl_HtmlStructuring", PERL_ARG: "213"}, "75", "22");
                }
            });	
			
			ed.addButton('latex_xml', {
                text: 'Latex XML',
                classes: "latex_xml",
                onclick: function () {
                    let custom_file_name = "latex_pdf";
                    let exist_file_path = $('#exist_file_path').val().split('/');
                    let file_name = exist_file_path[9].replace(/\.[^/.]+$/, "");
                    $.ajax({
                        type: 'post',
                        url: base_url + "home/check_download_file_exist/" + custom_file_name + "/xml",
                        data: {},
                        success: function (response) {
                            if (response == "success") {
                                window.open($HOSTNAME+"/media/"+exist_file_path[6]+"/"+exist_file_path[7]+"/"+exist_file_path[8]+"/LATEX_PDF/"+file_name+".xml", "_blank");
                            }
                            else{
                                window.alert("XML file not found...");
                            }
                        }
                    });
                }
            });	
			
			ed.addButton('latex_pdf', {
                text: 'Latex PDF',
                classes: "latex_pdf",
                onclick: function () {
					jQuery('.loader').show();
                    currentFileSave();
					// var ed = tinyMCE.activeEditor.getBody();
					setTimeout(function () {
						$.ajax({
							'async': false,
							'type': "POST",
							'global': false,
							'dataType': 'html',
							'url': base_url + "home/latex_pdf_download",
							success: function (response) {
								jQuery('.loader').hide();
								if (response == "success") {
									var custom_file_name = "latex_pdf";
									$.ajax({
										type: 'post',
										url: base_url + "home/check_download_file_exist/" + custom_file_name + "/pdf",
										data: {},
										success: function (response) {
											if (response == "success") {
												// window.location = base_url + "home/downloadfile/" + custom_file_name + "/pdf";
												let exist_file_path = $('#exist_file_path').val().split('/');
												let file_name = exist_file_path[9].replace(/\.[^/.]+$/, "");
												rightSidePanelOpen("", $pdfviewer, {HOSTNAME: $HOSTNAME, PUB_NAME: exist_file_path[6], JUR_NAME: exist_file_path[7], JOB_NO: exist_file_path[8], FILE_NAME: file_name, DIFFERENCE: "Latex_PDF", VALIDATIONREPORT: ""}, "50", "49");
											} else {
												// alert("Sorry this file not exist!..");
												$.ajax({
													'async': false,
													'type': "POST",
													'global': false,
													'dataType': 'html',
													'url': base_url + "home/PDF_Viewer_Report",
													'data': {buttonName: 'latex_pdf'},
													success: function (response) {
														rightSidePanelOpen("", $pdfviewer, {HOSTNAME: $HOSTNAME, PUB_NAME: "", JUR_NAME: "", JOB_NO: "", FILE_NAME: "", DIFFERENCE: "Latex_PDF", VALIDATIONREPORT: response}, "70", "28");
													}
												});
												menuhide();
											}
										}
									});
								}
								else
								{
									alert('PDF file is not exists ...');
									menuhide();
								}
							}
						});
                    }, 200);
				}					
            });

            ed.addMenuItem('Figure', {
                text: 'Figure',
                context: "Insert",
                onclick: function () {

                    jQuery('.loader').show();
                    var get_file_path = $('#exist_file_path').val();
                    get_file_path = get_file_path.split('/');
                    var folder_Name = get_file_path[get_file_path.length-2];
                    var jnl_name = get_file_path[get_file_path.length-3];
                    var pub_Name = get_file_path[get_file_path.length-4];
                    $('#example_ifr').css('width', '100%');
                    $('.RightSidePanel').remove();
                    $('#pstyleslist').remove();
					$('#example_ifr').parent().append("<div id='pstyleslist' style='width:28%'></div> ");
					
					$("#pstyleslist").load($insert_figure, {
						HOSTNAME: $HOSTNAME,
                        FOLDER_NAME: folder_Name,
                        JNL_NAME: jnl_name,
                        PUB_NAME: pub_Name
					},				
					function () { 		
						jQuery('.loader').hide();
					});
                }
            });
			
            ed.addMenuItem('renumbering', {
                text: 'Math Option',
                context: 'math',
                onclick: function () {
                    display_menu_by_menuname('renumbering');
                }
            });
			
			ed.addButton('mathmarker', {
                text: 'Math Marker',
                context: 'math',
                onclick: function () {					
                    // //jQuery('.loader').show()
					var selectedContent= ed.selection.getContent();
					var doc = document.getElementById('example_ifr').contentDocument;
					var getspantag=$(doc).find('span[class="mathmark"]');
					if(getspantag[0]==undefined)
					{
						var new_data = '<span class="mathmark" id="mathmark1">'+selectedContent+'</span>';
					}
					else
					{
						var getspanidnumber=getspantag.length;
						var id=getspanidnumber+1;
						var new_data = '<span class="mathmark" id="mathmark'+id+'">'+selectedContent+'</span>';
					}
					ed.selection.setContent(new_data);
                }
            });
			
			// MATH MARKER -> Generate math process - start - sankar            
            ed.addButton('generatemath', {
                text: 'Generate Math',
                context: 'math',
                onclick: function () {
                    jQuery('.loader').show();
					FileSave();
                    $.ajax({
                        'async': false,
                        'type': "POST",
                        'global': false,
                        'dataType': 'html',
                        'url': base_url + 'home/Generate_math_marker',
                        'success': function (data) {
                            $rs = data;
                            ed.setContent($rs);
                            jQuery('.loader').hide();
                        }
                    });
                }
            });
            // MATH MARKER -> Generate math process - end - sankar
			
            ed.addButton('eqnRenumber', {
                text: 'Eqn Re-number',
                context: 'math',
                onclick: function () {
                    jQuery('.loader').show()
                    $.ajax({
                        'async': false,
                        'type': "POST",
                        'global': false,
                        'dataType': 'html',
                        'url': base_url + 'home/file_BackupWith_stepNo',
                        'data': {argument_number: '177', diff: "IN"},
                        'success': function (data)
                        {
                            if(data == "Success")
                            {
                                $.ajax({
                                    'async': false,
                                    'type': "POST",
                                    'global': false,
                                    'dataType': 'html',
                                    'url': base_url + 'home/perl_HtmlStructuring',
                                    'data': {argument_number: '177'},
                                    'success': function (data)
                                    {
                                        $.ajax({
                                            'async': false,
                                            'type': "POST",
                                            'global': false,
                                            'dataType': 'html',
                                            'url': base_url + 'home/file_BackupWith_stepNo',
                                            'data': {argument_number: '177', diff: "OUT"},
                                            'success': function (data)
                                            {
                                                if(!data.includes("file not found"))
                                                {
                                                    tinyMCE.activeEditor.setContent(data);
                                                    alert("Eqn. Re-numbering successfull ...");
                                                    jQuery('.loader').hide();
                                                }
                                                else{
                                                    alert(data);
                                                    jQuery('.loader').hide();
                                                }
                                            }
                                        });
                                    }
                                });
                            }
                            else{
                                alert(data);
                                jQuery('.loader').hide();
                            }
                        }
                    });
                }
            });

            ed.addButton('revertEqn', {
                text: 'Revert Eqn',
                context: 'math',
                onclick: function () {
                    jQuery('.loader').show()
                    $.ajax({
                        'async': false,
                        'type': "POST",
                        'global': false,
                        'dataType': 'html',
                        'url': base_url + 'home/file_BackupWith_stepNo',
                        'data': {argument_number: '178', diff: "IN"},
                        'success': function (data)
                        {
                            if(data == "Success")
                            {
                                $.ajax({
                                    'async': false,
                                    'type': "POST",
                                    'global': false,
                                    'dataType': 'html',
                                    'url': base_url + 'home/perl_HtmlStructuring',
                                    'data': {argument_number: '178'},
                                    'success': function (data)
                                    {
                                        $.ajax({
                                            'async': false,
                                            'type': "POST",
                                            'global': false,
                                            'dataType': 'html',
                                            'url': base_url + 'home/file_BackupWith_stepNo',
                                            'data': {argument_number: '178', diff: "OUT"},
                                            'success': function (data)
                                            {
                                                if(!data.includes("file not found"))
                                                {
                                                    tinyMCE.activeEditor.setContent(data);
                                                    alert("Revert Eqn. successfull ...");
                                                    jQuery('.loader').hide();
                                                }
                                                else{
                                                    alert(data);
                                                    jQuery('.loader').hide();
                                                }
                                            }
                                        });
                                    }
                                });
                            }
                            else{
                                alert(data);
                                jQuery('.loader').hide();
                            }
                        }
                    });
                }
            });

            // Mani.d End
			//sathish inline figure-start
			ed.addMenuItem('Inline_Figure', {
                text: 'Inline Figure',
                context: "Insert",
                onclick: function () {
                    //debugger;
					jQuery('.loader').show();
                    var get_file_path = $('#exist_file_path').val();
                    get_file_path = get_file_path.split('/');
                    var folder_Name = get_file_path[get_file_path.length-2];
                    var jnl_name = get_file_path[get_file_path.length-3];
                    var pub_Name = get_file_path[get_file_path.length-4];
                    $('#example_ifr').css('width', '100%');
                    $('.RightSidePanel').remove();
                    $('#pstyleslist').remove();
					$('#example_ifr').parent().append("<div id='pstyleslist' style='width:28%'></div> ");
					$("#pstyleslist").load($insert_inlinefigure, {
						HOSTNAME: $HOSTNAME,
                        FOLDER_NAME: folder_Name,
                        JNL_NAME: jnl_name,
                        PUB_NAME: pub_Name
					},				
					function () { 		
						jQuery('.loader').hide();
					});

                }
            });
			//sathish inline figure-end
            ed.addMenuItem('submit_author', {
                text: 'Submit Proof',
                context: 'Integra',
                onclick: function () {
					
					var exist_file_id = $('#exist_file_id').val();
					jQuery('.loader').show();
                    $.ajax({
                        type: 'post',
                        url: base_url + "home/submit_author/",
                        data: {id:exist_file_id},
                        success: function (response) {
							if (response == "success") {								
                                window.location.href = $HOSTNAME+'/Integra/products_ce_editor/thankspage.php?res=1';	
                            } else {
                                alert("Sorry server busy please try again another time");
                            }
							jQuery('.loader').hide();
                        }
                    });

					


                }
            });

            ed.addMenuItem('author_submission', {
                text: 'Approve Proof',
                context: 'Integra',
                onclick: function () {
                    
					var exist_file_id = $('#exist_file_id').val();
					jQuery('.loader').show();
                    $.ajax({
                        type: 'post',
                        url: base_url + "home/approve_proof/",
                        data: {id:exist_file_id},
                        success: function (response) {
							if (response == "success") {                                							
                                window.location.href = $HOSTNAME+'/Integra/products_ce_editor/thankspage.php?res=2';	
                            } else {
                                alert("Sorry server busy please try again another time");
                            }
							jQuery('.loader').hide();
                        }
                    });

                }
            });	 
            	 
            
			ed.addMenuItem('applystyles',
            {
                text: 'Apply Styles',
                context: 'style',
				classes:'Applystyles',
                onclick: function (e)
                { 
					jQuery('.loader').show();
					var file_id = $('#exist_file_id').val(); 
					var temp_filename = $('#exist_file_name').val(); 
					var temp_filesourcepath = $('#exist_file_path').val(); 
									
					triggerclick("Apply Styles");
					$('#example_ifr').css('width', '100%');   
					$('#example_ifr').parent().append("<div class='RightSidePanel'><div class='Parastyles' style='position:relative;left:0;'><div id='pstyleslist'  style='width:28%'></div></div> ");
									
					$("#pstyleslist").load($applystyles, {
						HOSTNAME: $HOSTNAME,
						FILEID: file_id,
						FILENAME: temp_filename,
						FILESOURCEPATH: temp_filesourcepath
					},				
					function () { 		
						jQuery('.loader').hide();		
					});
					focus_cnt();
                }
			});	 
            	 
            
			ed.addMenuItem('insertcustomlink',
            {
                text: 'Insert Custom Link',
                context: 'style',
				classes:'Insertcustomlink',
                onclick: function (e)
                { 
					var file_id = $('#exist_file_id').val(); 
					var temp_filename = $('#exist_file_name').val(); 
					var temp_filesourcepath = $('#exist_file_path').val(); 
									
					triggerclick("Insert Custom Link");
					$('#example_ifr').css('width', '100%');   
					$('#example_ifr').parent().append("<div class='RightSidePanel'><div class='Parastyles' style='position:relative;left:0;'><div id='pstyleslist'  style='width:28%'></div></div> ");
									
					$("#pstyleslist").load($insertcustomlink, {
						HOSTNAME: $HOSTNAME,
						FILEID: file_id,
						FILENAME: temp_filename,
						FILESOURCEPATH: temp_filesourcepath
					},				
					function () { 				
					});
					focus_cnt();
                }
			});	

			
			/*alex start for column align*/
			  function col_alignRight(){
				  //debugger;
				  var nd = tinyMCE.activeEditor.dom.getParent(tinyMCE.activeEditor.selection.getNode(), 'th,td');
				  var get_nd = tinyMCE.activeEditor.dom.getParent(nd,'table');
				  var cel_ind = nd.cellIndex;
				  var th_count = get_nd.getElementsByTagName('thead')[0].childElementCount;
				  for(var i=0; i < th_count; i++)
				  {
					  if(get_nd.getElementsByTagName('thead')[0].children[i].children[cel_ind]!=undefined){
						get_nd.getElementsByTagName('thead')[0].children[i].children[cel_ind].setAttribute('align','right');
						removeAttribute_for_align(get_nd.getElementsByTagName('thead')[0].children[i].children[cel_ind], {'char':'', 'data-tbalign':'', 'style': 'background-color'});
					  }
				  }
				  var tb_count = get_nd.getElementsByTagName('tbody')[0].childElementCount;
				   for(var i=0; i < tb_count; i++)
				  {
					  if(get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind]!=undefined){
						  get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind].setAttribute('align','right');
						  if($(get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind]).attr('char')!=undefined){
							  $(get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind]).removeAttr('char')
						  }
						  removeAttribute_for_align(get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind], {'char':'', 'data-tbalign':'', 'style': 'background-color'});
					  }
				  }
				  var col_count;
				  if(!!$(get_nd.getElementsByTagName('colgroup')).length){
					  var col_count = get_nd.getElementsByTagName('colgroup')[0].childElementCount;
					  for(var i=0; i < col_count; i++)
					  {
						  if(get_nd.getElementsByTagName('colgroup')[0].children[cel_ind]!=undefined){
							get_nd.getElementsByTagName('colgroup')[0].children[cel_ind].setAttribute('align','right'); 
							removeAttribute_for_align(get_nd.getElementsByTagName('colgroup')[0].children[cel_ind], {'char':'', 'data-tbalign':'', 'style': 'background-color'}); 							
						  }
						  
					  }  
				  }
				  if(tinyMCE.activeEditor.contextmenu!=undefined){
					tinyMCE.activeEditor.contextmenu.hideAll()  
				  }
			  };
			  
			  
			  function col_alignLeft(){
				  //debugger;
				  var nd = tinyMCE.activeEditor.dom.getParent(tinyMCE.activeEditor.selection.getNode(), 'th,td');
				  var get_nd = tinyMCE.activeEditor.dom.getParent(nd,'table');
				  // var cel_Rowind = nd.parentNode.rowIndex;
				  // var t_name = nd.parentNode.parentNode.localName;
				  var cel_ind = nd.cellIndex;
				  // if(t_name == 'thead'){
					  // get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind].cells[cel_ind].setAttribute('align','right');
				  // } else{
				  // get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind-1].cells[cel_ind].setAttribute('align','right');
				  // }
				  var th_count = get_nd.getElementsByTagName('thead')[0].childElementCount;
				  for(var i=0; i < th_count; i++)
				  {
					  if(get_nd.getElementsByTagName('thead')[0].children[i].children[cel_ind]!=undefined){
						get_nd.getElementsByTagName('thead')[0].children[i].children[cel_ind].setAttribute('align','left');
						removeAttribute_for_align(get_nd.getElementsByTagName('thead')[0].children[i].children[cel_ind], {'char':'', 'data-tbalign':'', 'style': 'background-color'});
					  }
				  }
				  var tb_count = get_nd.getElementsByTagName('tbody')[0].childElementCount;
				   for(var i=0; i < tb_count; i++)
				  {
					  if(get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind]!=undefined){
						get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind].setAttribute('align','left');
						if($(get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind]).attr('char')!=undefined){
							  $(get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind]).removeAttr('char')
						  }
						  removeAttribute_for_align(get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind], {'char':'', 'data-tbalign':'', 'style': 'background-color'});
					  }
					  
				  }  
				  var col_count;
				  if(!!$(get_nd.getElementsByTagName('colgroup')).length){
					  var col_count = get_nd.getElementsByTagName('colgroup')[0].childElementCount;
					  for(var i=0; i < col_count; i++)
					  {
						  if(get_nd.getElementsByTagName('colgroup')[0].children[cel_ind]!=undefined){
							get_nd.getElementsByTagName('colgroup')[0].children[cel_ind].setAttribute('align','left');
							removeAttribute_for_align(get_nd.getElementsByTagName('colgroup')[0].children[cel_ind], {'char':'', 'data-tbalign':'', 'style': 'background-color'});
						  }
						  
					  }  
				  }	
				  if(tinyMCE.activeEditor.contextmenu!=undefined){
					tinyMCE.activeEditor.contextmenu.hideAll()  
				  }
			  };
			  
			  
			  function col_alignCenter(){
				  // debugger;
				  var nd = tinyMCE.activeEditor.dom.getParent(tinyMCE.activeEditor.selection.getNode(), 'th,td');
				  var get_nd = tinyMCE.activeEditor.dom.getParent(nd,'table');
				  var cel_ind = nd.cellIndex;
				  var th_count = get_nd.getElementsByTagName('thead')[0].childElementCount;
				  for(var i=0; i < th_count; i++)
				  {
					  if(get_nd.getElementsByTagName('thead')[0].children[i].children[cel_ind]!=undefined){
						get_nd.getElementsByTagName('thead')[0].children[i].children[cel_ind].setAttribute('align','center');
						removeAttribute_for_align(get_nd.getElementsByTagName('thead')[0].children[i].children[cel_ind], {'char':'', 'data-tbalign':'', 'style': 'background-color'});
					  }
				  }
				  var tb_count = get_nd.getElementsByTagName('tbody')[0].childElementCount;
				   for(var i=0; i < tb_count; i++)
				  {
					  if(get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind]!=undefined){
						get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind].setAttribute('align','center');
						if($(get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind]).attr('char')!=undefined){
							  $(get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind]).removeAttr('char')
						  }
						removeAttribute_for_align(get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind], {'char':'', 'data-tbalign':'', 'style': 'background-color'});
					  }
				  }  
				  var col_count;
				  if(!!$(get_nd.getElementsByTagName('colgroup')).length){
					  var col_count = get_nd.getElementsByTagName('colgroup')[0].childElementCount;
					  for(var i=0; i < col_count; i++)
					  {
						  if(get_nd.getElementsByTagName('colgroup')[0].children[cel_ind]!=undefined){
							get_nd.getElementsByTagName('colgroup')[0].children[cel_ind].setAttribute('align','center');
							removeAttribute_for_align(get_nd.getElementsByTagName('colgroup')[0].children[cel_ind], {'char':'', 'data-tbalign':'', 'style': 'background-color'});
						  }
						  
					  }  
				  }
				  if(tinyMCE.activeEditor.contextmenu!=undefined){
					tinyMCE.activeEditor.contextmenu.hideAll()  
				  }
			  };
			  
				function col_aligncustom() {
                var inpt_Html = '<div><p style="margin-top: 10px;margin-left: 10px;"><label>Head align type: </label><select style="width:100px;margin-left:5px;border: 1px solid;" name="tblcustomalign" id="tblcustomalign"><option value="left">Left</option><option value="right">Right</option><option value="center">Center</option></select></p>';
                inpt_Html += '<p style="margin-top: 10px;margin-left: 10px;"><label>Custom type: </label><select style="width:125px;margin-left:24px;border: 1px solid;" name="tblcustomlist" id="tblcustomlist"><option value="custom">Custom</option><option value="dot">Dot</option><option value="equalsign">Equal Sign</option><option value="openbrace">Open Brace</option><option value="closebrace">Close Brace</option><option value="plussign">Plus Sign</option><option value="minussign">Minus Sign</option><option value="greaterthansign">Greater than Sign</option><option value="lessthansign">Less than Sign</option></select></p>';
                inpt_Html += '<p style="margin-top: 10px;margin-left: 10px;"><label>Custom value: </label><input id="cust-data-val" style="padding-left:2px;color:black; font-weight: bold; border: 1px solid;margin-left: 17px;width: 125px;height: 20px;background: white;"></p></div>';
                tinyMCE.activeEditor.windowManager.open({
                    title: "Character Alignment",
                    //  body: { type: 'textbox', name: 'cust-data-val', id: 'cust-data-val', label: 'Custom value', placeholder: 'Enter Custom Value' },
                    html: inpt_Html,
                    width: 300,
                    height: 100,
                    onClose: function () {
                        var ed = tinyMCE.get('example');
                        tinyMCE.activeEditor.focus();
                        ed.setProgressState(0); // Hide progress
                    },
                    buttons: [{
                        text: 'OK',
                        subtype: 'primary',
                        onclick: function (e) {
                            debugger;

                            if ($('#tblcustomlist').val() == 'custom') {
                                var ctval = $('#cust-data-val').val();
                                if (ctval == '') {
                                    tinyMCE.activeEditor.windowManager.alert('Custom value is required');
                                    return false;
                                } else {
                                    col_alignDot($('#tblcustomalign').val(), ctval);
                                    $('.mce-close').trigger('click');
                                }
                            }
                            else {
                                col_alignDot($('#tblcustomalign').val(), $('#tblcustomlist').val());
                                $('.mce-close').trigger('click');
                            }
                        }
                    },
                    {
                        text: 'Close',
                        onclick: function () {
                            $('.mce-close').trigger('click');
                        }
                    }],
                });

                $('#tblcustomlist').change(function () {
                    if ($(this).val() == 'custom') {
                        $("#cust-data-val").prop('disabled', false);
                        $("#cust-data-val").css('background', 'white');
                        $('#cust-data-val').focus();
                        $("#cust-data-val").css('cursor', 'text');
                    }
                    else {
                        $("#cust-data-val").prop('disabled', true);
                        $("#cust-data-val").css('background', '#f5f5f0');
                        $('#cust-data-val').val('');
                        $("#cust-data-val").css('cursor', 'not-allowed');
                    }
                });
            };
				
				function col_alignDot(theadalign, pval) {

					// var nd = tinyMCE.activeEditor.selection.getNode();
					var nd = tinyMCE.activeEditor.dom.getParent(tinyMCE.activeEditor.selection.getNode(), 'th,td');
					var get_nd = tinyMCE.activeEditor.dom.getParent(nd, 'table');
					var cel_ind = nd.cellIndex;
					var th_count = get_nd.getElementsByTagName('thead')[0].childElementCount;
					for (var i = 0; i < th_count; i++) {
						//get_nd.getElementsByTagName('thead')[0].children[i].children[cel_ind].setAttribute('style','background-color:yellow');
						if (get_nd.getElementsByTagName('thead')[0].children[i].children[cel_ind] != undefined) {
							get_nd.getElementsByTagName('thead')[0].children[i].children[cel_ind].setAttribute('char', pval);
							get_nd.getElementsByTagName('thead')[0].children[i].children[cel_ind].setAttribute('data-tbalign', theadalign);
							// get_nd.getElementsByTagName('thead')[0].children[i].children[cel_ind].setAttribute('align','char');
							get_nd.getElementsByTagName('thead')[0].children[i].children[cel_ind].setAttribute('align', 'center');
							get_nd.getElementsByTagName('thead')[0].children[i].children[cel_ind].style.setProperty('background-color', 'yellow');
							let getStylesAttri = get_nd.getElementsByTagName('thead')[0].children[i].children[cel_ind].getAttribute('style');
							get_nd.getElementsByTagName('thead')[0].children[i].children[cel_ind].dataset.mceStyle = getStylesAttri;
						}

					}
					var tb_count = get_nd.getElementsByTagName('tbody')[0].childElementCount;
					for (var i = 0; i < tb_count; i++) {
						//get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind].setAttribute('style','background-color:yellow');
						if (get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind] != undefined) {
							get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind].setAttribute('char', pval);
							get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind].setAttribute('align', 'center');
							//if ($(get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind]).attr('align') != undefined) {
							//    $(get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind]).removeAttr('align')
							//}
						}
					}
					var col_count;
					if (!!$(get_nd.getElementsByTagName('colgroup')).length) {
						var col_count = get_nd.getElementsByTagName('colgroup')[0].childElementCount;
						for (var i = 0; i < col_count; i++) {
							if (get_nd.getElementsByTagName('colgroup')[0].children[cel_ind] != undefined) {
								//get_nd.getElementsByTagName('colgroup')[0].children[cel_ind].setAttribute('align', 'char');  
								get_nd.getElementsByTagName('colgroup')[0].children[cel_ind].setAttribute('align', 'center');
							}

						}
					}
					if (tinyMCE.activeEditor.contextmenu != undefined) {
						tinyMCE.activeEditor.contextmenu.hideAll()
					}
				};
				
				function col_alignHangingIndent() {
					var nd = tinyMCE.activeEditor.dom.getParent(tinyMCE.activeEditor.selection.getNode(), 'th,td');
					var get_nd = tinyMCE.activeEditor.dom.getParent(nd, 'table');
					var cel_ind = nd.cellIndex;

					//var th_count = get_nd.getElementsByTagName('thead')[0].childElementCount;
					//for (var i = 0; i < th_count; i++) {
					//    if (get_nd.getElementsByTagName('thead')[0].children[i].children[cel_ind] != undefined) {
					//        get_nd.getElementsByTagName('thead')[0].children[i].children[cel_ind].setAttribute('align', 'hangingindent');
					//        removeAttribute_for_align(get_nd.getElementsByTagName('thead')[0].children[i].children[cel_ind], { 'char': '', 'data-tbalign': '', 'style': 'background-color' });
					//    }
					//}
					//var tb_count = get_nd.getElementsByTagName('tbody')[0].childElementCount;
					//for (var i = 0; i < tb_count; i++) {
					//    if (get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind] != undefined) {
					//        get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind].setAttribute('align', 'hangingindent');
					//        if ($(get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind]).attr('char') != undefined) {
					//            $(get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind]).removeAttr('char')
					//        }
					//        removeAttribute_for_align(get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind], { 'char': '', 'data-tbalign': '', 'style': 'background-color' });
					//    }                
					//}

					var inpt_Html = '<div><p style="margin-top: 10px;margin-left: 10px;"><label>Indent Value: </label><input id="hang-indnt-val" style="padding-left:2px;color:black; font-weight: bold; border: 1px solid;margin-left: 17px;width: 75px;height: 20px;background: white;"><select style="height: 20px;width: 50px;margin-left:5px;border: 1px solid;" name="hanginttype" id="hanginttype"><option value="px">PX</option><option value="pt">PT</option><option value="pc">PC</option></select></p></div>';

					tinyMCE.activeEditor.windowManager.open({
						title: "Hanging Indent",
						html: inpt_Html,
						width: 270,
						height: 60,
						onClose: function () {
							var ed = tinyMCE.get('example');
							tinyMCE.activeEditor.focus();
							ed.setProgressState(0); // Hide progress
						},
						buttons: [{
							text: 'OK',
							subtype: 'primary',
							onclick: function (e) {

								var ctval = $('#hang-indnt-val').val();
								if (ctval == '') {
									tinyMCE.activeEditor.windowManager.alert('Indent value is required');
									return false;
								}
								
								var hangint_val = $("#hang-indnt-val").val() + $('#hanginttype').val();
								var col_count;
								if (!!$(get_nd.getElementsByTagName('colgroup')).length) {
									var col_count = get_nd.getElementsByTagName('colgroup')[0].childElementCount;
									for (var i = 0; i < col_count; i++) {
										if (get_nd.getElementsByTagName('colgroup')[0].children[cel_ind] != undefined) {
											// get_nd.getElementsByTagName('colgroup')[0].children[cel_ind].setAttribute('align', 'hangingindent');
											get_nd.getElementsByTagName('colgroup')[0].children[cel_ind].setAttribute('data-hangindt-value', hangint_val);
											removeAttribute_for_align(get_nd.getElementsByTagName('colgroup')[0].children[cel_ind], { 'char': '', 'data-tbalign': '', 'style': 'background-color' });
										}

									}
								}
								if (tinyMCE.activeEditor.contextmenu != undefined) {
									tinyMCE.activeEditor.contextmenu.hideAll()
								}
								$('.mce-close').trigger('click');
							}
						},
						{
							text: 'Close',
							onclick: function () {
								$('.mce-close').trigger('click');
							}
						}],
					});
				};
				
				//added by sathish -start
				function col_alignTop(){
					  //debugger;
					  var nd = tinyMCE.activeEditor.dom.getParent(tinyMCE.activeEditor.selection.getNode(), 'th,td');
					  var get_nd = tinyMCE.activeEditor.dom.getParent(nd,'table');
					  var cel_ind = nd.cellIndex;
					  var th_count = get_nd.getElementsByTagName('thead')[0].childElementCount;
					  for(var i=0; i < th_count; i++)
					  {
						  if(get_nd.getElementsByTagName('thead')[0].children[i].children[cel_ind]!=undefined){
						  get_nd.getElementsByTagName('thead')[0].children[i].children[cel_ind].setAttribute('valign','top');
						  removeAttribute_for_align(get_nd.getElementsByTagName('thead')[0].children[i].children[cel_ind], {'char':'', 'data-tbalign':'', 'style': 'background-color'});
						  }
					  }
					  var tb_count = get_nd.getElementsByTagName('tbody')[0].childElementCount;
					   for(var i=0; i < tb_count; i++)
					  {
						  if(get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind]!=undefined){
							  get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind].setAttribute('valign','top');
							  if($(get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind]).attr('char')!=undefined){
								  $(get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind]).removeAttr('char')
							  }
							  removeAttribute_for_align(get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind], {'char':'', 'data-tbalign':'', 'style': 'background-color'});
						  }
						  
						  
					  } 
					  var col_count;
					  if(!!$(get_nd.getElementsByTagName('colgroup')).length){
						var col_count = get_nd.getElementsByTagName('colgroup')[0].childElementCount;
					  for(var i=0; i < col_count; i++)
					  {
						  if(get_nd.getElementsByTagName('colgroup')[0].children[cel_ind]!=undefined){
							get_nd.getElementsByTagName('colgroup')[0].children[cel_ind].setAttribute('valign','top');  
							removeAttribute_for_align(get_nd.getElementsByTagName('colgroup')[0].children[cel_ind], {'char':'', 'data-tbalign':'', 'style': 'background-color'});
						  }
						  
					  }  
					  }
					  if(tinyMCE.activeEditor.contextmenu!=undefined){
						tinyMCE.activeEditor.contextmenu.hideAll()  
					  }
					  
				  };
				  function col_alignBottom(){
					  //debugger;
					  var nd = tinyMCE.activeEditor.dom.getParent(tinyMCE.activeEditor.selection.getNode(), 'th,td');
					  var get_nd = tinyMCE.activeEditor.dom.getParent(nd,'table');
					  var cel_ind = nd.cellIndex;
					  var th_count = get_nd.getElementsByTagName('thead')[0].childElementCount;
					  for(var i=0; i < th_count; i++)
					  {
						  if(get_nd.getElementsByTagName('thead')[0].children[i].children[cel_ind]!=undefined){
						  get_nd.getElementsByTagName('thead')[0].children[i].children[cel_ind].setAttribute('valign','bottom');
						  removeAttribute_for_align(get_nd.getElementsByTagName('thead')[0].children[i].children[cel_ind], {'char':'', 'data-tbalign':'', 'style': 'background-color'});
						  }
					  }
					  var tb_count = get_nd.getElementsByTagName('tbody')[0].childElementCount;
					   for(var i=0; i < tb_count; i++)
					  {
						  if(get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind]!=undefined){
							  get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind].setAttribute('valign','bottom');
							  if($(get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind]).attr('char')!=undefined){
								  $(get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind]).removeAttr('char')
							  }
							  removeAttribute_for_align(get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind], {'char':'', 'data-tbalign':'', 'style': 'background-color'});
						  }
						  
						  
					  } 
					  var col_count;
					  if(!!$(get_nd.getElementsByTagName('colgroup')).length){
						var col_count = get_nd.getElementsByTagName('colgroup')[0].childElementCount;
					  for(var i=0; i < col_count; i++)
					  {
						  if(get_nd.getElementsByTagName('colgroup')[0].children[cel_ind]!=undefined){
							get_nd.getElementsByTagName('colgroup')[0].children[cel_ind].setAttribute('valign','bottom');  
							removeAttribute_for_align(get_nd.getElementsByTagName('colgroup')[0].children[cel_ind], {'char':'', 'data-tbalign':'', 'style': 'background-color'});
						  }
						  
					  }  
					  }
					  if(tinyMCE.activeEditor.contextmenu!=undefined){
						tinyMCE.activeEditor.contextmenu.hideAll()  
					  }
					  
				  };
				  function col_alignmiddle(){
					  //debugger;
					  var nd = tinyMCE.activeEditor.dom.getParent(tinyMCE.activeEditor.selection.getNode(), 'th,td');
					  var get_nd = tinyMCE.activeEditor.dom.getParent(nd,'table');
					  var cel_ind = nd.cellIndex;
					  var th_count = get_nd.getElementsByTagName('thead')[0].childElementCount;
					  for(var i=0; i < th_count; i++)
					  {
						  if(get_nd.getElementsByTagName('thead')[0].children[i].children[cel_ind]!=undefined){
						  get_nd.getElementsByTagName('thead')[0].children[i].children[cel_ind].setAttribute('valign','center');
						  removeAttribute_for_align(get_nd.getElementsByTagName('thead')[0].children[i].children[cel_ind], {'char':'', 'data-tbalign':'', 'style': 'background-color'}); 
						  }
					  }
					  var tb_count = get_nd.getElementsByTagName('tbody')[0].childElementCount;
					   for(var i=0; i < tb_count; i++)
					  {
						  if(get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind]!=undefined){
							  get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind].setAttribute('valign','center');
							  if($(get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind]).attr('char')!=undefined){
								  $(get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind]).removeAttr('char')
							  }
							  removeAttribute_for_align(get_nd.getElementsByTagName('tbody')[0].children[i].children[cel_ind], {'char':'', 'data-tbalign':'', 'style': 'background-color'});
						  }
						  
						  
					  } 
					  var col_count;
					  if(!!$(get_nd.getElementsByTagName('colgroup')).length){
						var col_count = get_nd.getElementsByTagName('colgroup')[0].childElementCount;
					  for(var i=0; i < col_count; i++)
					  {
						  if(get_nd.getElementsByTagName('colgroup')[0].children[cel_ind]!=undefined){
							get_nd.getElementsByTagName('colgroup')[0].children[cel_ind].setAttribute('valign','bottom');  
							removeAttribute_for_align(get_nd.getElementsByTagName('colgroup')[0].children[cel_ind], {'char':'', 'data-tbalign':'', 'style': 'background-color'}); 
						  }
						  
					  }  
					  }
					  if(tinyMCE.activeEditor.contextmenu!=undefined){
						tinyMCE.activeEditor.contextmenu.hideAll()  
					  }
					  
				  };
				//added by sathish -end
			  
			  function cell_alignRight(){
				  //debugger;
				  var nd = tinyMCE.activeEditor.dom.getParent(tinyMCE.activeEditor.selection.getNode(), 'th,td');
				  var get_nd = tinyMCE.activeEditor.dom.getParent(nd,'table');
				  var cel_Rowind = nd.parentNode.rowIndex;
				  var t_name = nd.parentNode.parentNode.localName;
				  var cel_ind = nd.cellIndex;
				  if(t_name == 'thead'){
					  get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind].cells[cel_ind].setAttribute('align','right');
					  removeAttribute_for_align(get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind].cells[cel_ind], {'char':'', 'data-tbalign':'', 'style': 'background-color'});
				  } else{
				  get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind-1].cells[cel_ind].setAttribute('align','right');
				  removeAttribute_for_align(get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind-1].cells[cel_ind], {'char':'', 'data-tbalign':'', 'style': 'background-color'});
				  }
				  if(tinyMCE.activeEditor.contextmenu!=undefined){
					tinyMCE.activeEditor.contextmenu.hideAll()  
				  }
			  };
			  
			  function cell_alignLeft(){
				  // debugger;
				  var nd = tinyMCE.activeEditor.dom.getParent(tinyMCE.activeEditor.selection.getNode(), 'th,td');
				  var get_nd = tinyMCE.activeEditor.dom.getParent(nd,'table');
				  var cel_Rowind = nd.parentNode.rowIndex;
				  var t_name = nd.parentNode.parentNode.localName;
				  var cel_ind = nd.cellIndex;
				  if(t_name == 'thead'){
					  get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind].cells[cel_ind].setAttribute('align','left');
					  removeAttribute_for_align(get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind].cells[cel_ind], {'char':'', 'data-tbalign':'', 'style': 'background-color'});
				  } else{
				  get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind-1].cells[cel_ind].setAttribute('align','left');
				  removeAttribute_for_align(get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind-1].cells[cel_ind], {'char':'', 'data-tbalign':'', 'style': 'background-color'});
				  }
				  if(tinyMCE.activeEditor.contextmenu!=undefined){
					tinyMCE.activeEditor.contextmenu.hideAll()  
				  }
			  };
			  
			  function cell_alignCenter(){
				  // debugger;
				  var nd = tinyMCE.activeEditor.dom.getParent(tinyMCE.activeEditor.selection.getNode(), 'th,td');
				  var get_nd = tinyMCE.activeEditor.dom.getParent(nd,'table');
				  var cel_Rowind = nd.parentNode.rowIndex;
				  var t_name = nd.parentNode.parentNode.localName;
				  var cel_ind = nd.cellIndex;
				  if(t_name == 'thead'){
					  get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind].cells[cel_ind].setAttribute('align','center');
					  removeAttribute_for_align(get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind].cells[cel_ind], {'char':'', 'data-tbalign':'', 'style': 'background-color'});
				  } else{
				  get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind-1].cells[cel_ind].setAttribute('align','center');
				  removeAttribute_for_align(get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind-1].cells[cel_ind], {'char':'', 'data-tbalign':'', 'style': 'background-color'});
				  }
				  if(tinyMCE.activeEditor.contextmenu!=undefined){
					tinyMCE.activeEditor.contextmenu.hideAll()  
				  }
			  };
			  
			  function cell_aligncustom() {
                    var inpt_Html = '<div><p style="margin-top: 10px;margin-left: 10px;"><label>Head align type: </label><select style="width:100px;margin-left:5px;border: 1px solid;" name="tblcustomalign" id="tblcustomalign"><option value="left">Left</option><option value="right">Right</option><option value="center">Center</option></select></p>';
                    inpt_Html += '<p style="margin-top: 10px;margin-left: 10px;"><label>Custom type: </label><select style="width:125px;margin-left:24px;border: 1px solid;" name="tblcustomlist" id="tblcustomlist"><option value="custom">Custom</option><option value="dot">Dot</option><option value="equalsign">Equal Sign</option><option value="openbrace">Open Brace</option><option value="closebrace">Close Brace</option><option value="plussign">Plus Sign</option><option value="minussign">Minus Sign</option><option value="greaterthansign">Greater than Sign</option><option value="lessthansign">Less than Sign</option></select></p>';
                    inpt_Html += '<p style="margin-top: 10px;margin-left: 10px;"><label>Custom value: </label><input id="cust-data-val" style="padding-left:2px;color:black; font-weight: bold; border: 1px solid;margin-left: 17px;width: 125px;height: 20px;background: white;"></p></div>';
                    tinyMCE.activeEditor.windowManager.open({
                        title: "Character Alignment",
                        //  body: { type: 'textbox', name: 'cust-data-val', id: 'cust-data-val', label: 'Custom value', placeholder: 'Enter Custom Value' },
                        html: inpt_Html,
                        width: 300,
                        height: 100,
                        onClose: function () {
                            var ed = tinyMCE.get('example');
                            tinyMCE.activeEditor.focus();
                            ed.setProgressState(0); // Hide progress
                        },
                        buttons: [{
                            text: 'OK',
                            subtype: 'primary',
                            onclick: function (e) {
                                // debugger;

                                if ($('#tblcustomlist').val() == 'custom') {
                                    var ctval = $('#cust-data-val').val();
                                    if (ctval == '') {
                                        tinyMCE.activeEditor.windowManager.alert('Custom value is required');
                                        return false;
                                    } else {
                                        cell_alignDot($('#tblcustomalign').val(), ctval);
                                        $('.mce-close').trigger('click');
                                    }
                                }
                                else {
                                    cell_alignDot($('#tblcustomalign').val(), $('#tblcustomlist').val());
                                    $('.mce-close').trigger('click');
                                }
                            }
                        },
                        {
                            text: 'Close',
                            onclick: function () {
                                $('.mce-close').trigger('click');
                            }
                        }],
                    });

                    $('#tblcustomlist').change(function () {
                        if ($(this).val() == 'custom') {
                            $("#cust-data-val").prop('disabled', false);
                            $("#cust-data-val").css('background', 'white');
                            $('#cust-data-val').focus();
                            $("#cust-data-val").css('cursor', 'text');
                        }
                        else {
                            $("#cust-data-val").prop('disabled', true);
                            $("#cust-data-val").css('background', '#f5f5f0');
                            $('#cust-data-val').val('');
                            $("#cust-data-val").css('cursor', 'not-allowed');
                        }
                    });
                };
			  
			  function cell_alignDot(theadalign, pval){
				  //debugger;
				  var nd = tinyMCE.activeEditor.dom.getParent(tinyMCE.activeEditor.selection.getNode(), 'th,td');
				  var get_nd = tinyMCE.activeEditor.dom.getParent(nd,'table');
				  var cel_Rowind = nd.parentNode.rowIndex;
				  var t_name = nd.parentNode.parentNode.localName;
				  var cel_ind = nd.cellIndex;
				  if(t_name == 'thead'){
					  get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind].cells[cel_ind].setAttribute('char', pval);
					  get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind].cells[cel_ind].setAttribute('data-tbalign', theadalign);  
                      get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind].cells[cel_ind].setAttribute('align', 'center');
                      get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind].cells[cel_ind].style.setProperty('background-color', 'yellow');
                      let getStylesAttri = get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind].cells[cel_ind].getAttribute('style');
                      get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind].cells[cel_ind].dataset.mceStyle = getStylesAttri;
				  } else{
					get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind-1].cells[cel_ind].setAttribute('char', pval);
					get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind-1].cells[cel_ind].setAttribute('data-tbalign', theadalign);  
                    get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind-1].cells[cel_ind].setAttribute('align', 'center');
                    get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind-1].cells[cel_ind].style.setProperty('background-color', 'yellow');
                    let getStylesAttri = get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind-1].cells[cel_ind].getAttribute('style');
                    get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind-1].cells[cel_ind].dataset.mceStyle = getStylesAttri;
				  }
				  if(tinyMCE.activeEditor.contextmenu!=undefined){
					tinyMCE.activeEditor.contextmenu.hideAll()  
				  }
			  };
			 
			  //added by sathish -start
			  function cell_alignTop(){
				  //debugger;
				  var nd = tinyMCE.activeEditor.dom.getParent(tinyMCE.activeEditor.selection.getNode(), 'th,td');
				  var get_nd = tinyMCE.activeEditor.dom.getParent(nd,'table');
				  var cel_Rowind = nd.parentNode.rowIndex;
				  var t_name = nd.parentNode.parentNode.localName;
				  var cel_ind = nd.cellIndex;
				  if(t_name == 'thead'){
					  get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind].cells[cel_ind].setAttribute('valign','top');
					  removeAttribute_for_align(get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind].cells[cel_ind], {'char':'', 'data-tbalign':'', 'style': 'background-color'});
				  } else{
					  //var get align_attr =get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind-1].cells[cel_ind].getAttribute();
				  get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind-1].cells[cel_ind].setAttribute('valign','top');
				  removeAttribute_for_align(get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind-1].cells[cel_ind], {'char':'', 'data-tbalign':'', 'style': 'background-color'});
				  }
				  if(tinyMCE.activeEditor.contextmenu!=undefined){
					tinyMCE.activeEditor.contextmenu.hideAll()  
				  }
			  };
			  function cell_alignBottom(){
				  //debugger;
				  var nd = tinyMCE.activeEditor.dom.getParent(tinyMCE.activeEditor.selection.getNode(), 'th,td');
				  var get_nd = tinyMCE.activeEditor.dom.getParent(nd,'table');
				  var cel_Rowind = nd.parentNode.rowIndex;
				  var t_name = nd.parentNode.parentNode.localName;
				  var cel_ind = nd.cellIndex;
				  if(t_name == 'thead'){
					  get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind].cells[cel_ind].setAttribute('valign','bottom');
					  removeAttribute_for_align(get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind].cells[cel_ind], {'char':'', 'data-tbalign':'', 'style': 'background-color'});
				  } else{
					  //var get align_attr =get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind-1].cells[cel_ind].getAttribute();
				  get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind-1].cells[cel_ind].setAttribute('valign','bottom');
				  removeAttribute_for_align(get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind-1].cells[cel_ind], {'char':'', 'data-tbalign':'', 'style': 'background-color'});
				  }
				  if(tinyMCE.activeEditor.contextmenu!=undefined){
					tinyMCE.activeEditor.contextmenu.hideAll()  
				  }
			  };
			  function cell_alignMiddle(){
				  //debugger;
				  var nd = tinyMCE.activeEditor.dom.getParent(tinyMCE.activeEditor.selection.getNode(), 'th,td');
				  var get_nd = tinyMCE.activeEditor.dom.getParent(nd,'table');
				  var cel_Rowind = nd.parentNode.rowIndex;
				  var t_name = nd.parentNode.parentNode.localName;
				  var cel_ind = nd.cellIndex;
				  if(t_name == 'thead'){
					  get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind].cells[cel_ind].setAttribute('valign','center');
					  removeAttribute_for_align(get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind].cells[cel_ind], {'char':'', 'data-tbalign':'', 'style': 'background-color'});
				  } else{
					  //var get align_attr =get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind-1].cells[cel_ind].getAttribute();
				  get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind-1].cells[cel_ind].setAttribute('valign','center');
				  removeAttribute_for_align(get_nd.getElementsByTagName(t_name)[0].rows[cel_Rowind-1].cells[cel_ind], {'char':'', 'data-tbalign':'', 'style': 'background-color'});
				  }
				  if(tinyMCE.activeEditor.contextmenu!=undefined){
					tinyMCE.activeEditor.contextmenu.hideAll()  
				  }
			  };
			  //added by sathish -end
			  
			  function row_alignRight(){
				  //debugger;
				  var nd = tinyMCE.activeEditor.dom.getParent(tinyMCE.activeEditor.selection.getNode(), 'th,td');
				  var get_nd = tinyMCE.activeEditor.dom.getParent(nd,'tr').children;
				  for(var i=0; i<get_nd.length; i++)
				  {
					get_nd[i].setAttribute('align','right');
				  }
			  };
			  //added by sathish-start
			  function row_alignTop(){
				  //debugger;
				  var nd = tinyMCE.activeEditor.dom.getParent(tinyMCE.activeEditor.selection.getNode(), 'th,td');
				  var get_nd = tinyMCE.activeEditor.dom.getParent(nd,'tr').children;
				  for(var i=0; i<get_nd.length; i++)
				  {
					get_nd[i].setAttribute('valign','top');
				  }
			  };
			  function row_alignBottom(){
				  //debugger;
				  var nd = tinyMCE.activeEditor.dom.getParent(tinyMCE.activeEditor.selection.getNode(), 'th,td');
				  var get_nd = tinyMCE.activeEditor.dom.getParent(nd,'tr').children;
				  for(var i=0; i<get_nd.length; i++)
				  {
					get_nd[i].setAttribute('valign','bottom');
				  }
			  };
			  function row_alignMiddle(){
				  //debugger;
				  var nd = tinyMCE.activeEditor.dom.getParent(tinyMCE.activeEditor.selection.getNode(), 'th,td');
				  var get_nd = tinyMCE.activeEditor.dom.getParent(nd,'tr').children;
				  for(var i=0; i<get_nd.length; i++)
				  {
					get_nd[i].setAttribute('valign','center');
				  }
			  };
			  //added by sathish-end
			  function row_alignLeft(){
				  //debugger;
				  var nd = tinyMCE.activeEditor.dom.getParent(tinyMCE.activeEditor.selection.getNode(), 'th,td');
				  var get_nd = tinyMCE.activeEditor.dom.getParent(nd,'tr').children;
				  for(var i=0; i<get_nd.length; i++)
				  {
					get_nd[i].setAttribute('align','left');
				  }
			  };
			  
			  function row_alignCenter(){
				  //debugger;
				  var nd = tinyMCE.activeEditor.dom.getParent(tinyMCE.activeEditor.selection.getNode(), 'th,td');
				  var get_nd = tinyMCE.activeEditor.dom.getParent(nd,'tr').children;
				  for(var i=0; i<get_nd.length; i++)
				  {
					get_nd[i].setAttribute('align','center');
				  }
			  };
			  
			  function row_alignDot(){
				  // debugger;
				  var nd = tinyMCE.activeEditor.dom.getParent(tinyMCE.activeEditor.selection.getNode(), 'th,td');
				  var get_nd = tinyMCE.activeEditor.dom.getParent(nd,'tr').children;
				  for(var i=0; i<get_nd.length; i++)
				  {
					get_nd[i].style.setProperty('background-color', 'yellow');
                    let getStylesAttri = get_nd[i].getAttribute('style');
                    get_nd[i].dataset.mceStyle = getStylesAttri;
				  }
			  };
			
			
			ed.addMenuItem('Alignment', {
			text: 'Cell Alignment',
			context: 'Alignment',
			classes: 'Alignment',
			menu: [
					{text: 'Entire column', 
					menu:[
							{text: 'Right',onclick: col_alignRight},
							{text: 'Left',onclick: col_alignLeft},
							{text: 'Center',onclick: col_alignCenter},
							// {text: 'Dot', onclick: function () {col_alignDot('dot')}},	
                            {text: 'Custom', onclick: col_aligncustom },
							{text: 'Top',onclick: col_alignTop},
							{text: 'Bottom',onclick: col_alignBottom},
							{text: 'Middle',onclick: col_alignmiddle},
							{ text: 'Hanging Indent', onclick: col_alignHangingIndent }
					]},
					
					{text: 'Entire row', 
					menu:[
							{text: 'Right',onclick: row_alignRight},
							{text: 'Left',onclick: row_alignLeft},
							{text: 'Center',onclick: row_alignCenter},
							{text: 'Dot',onclick: row_alignDot},
							{text: 'Top',onclick: row_alignTop},
							{text: 'Bottom',onclick: row_alignBottom},
							{text: 'Middle',onclick: row_alignMiddle}
					]},
					
					{text: 'Single cell', 
					menu:[
							{text: 'Right',onclick: cell_alignRight},
							{text: 'Left',onclick: cell_alignLeft},
							{text: 'Center',onclick: cell_alignCenter},
							// {text: 'Dot',onclick: cell_alignDot},
							{text: 'Custom', onclick: cell_aligncustom },
							{text: 'Top',onclick: cell_alignTop},							
							{text: 'Bottom',onclick: cell_alignBottom},
							{text: 'Middle',onclick: cell_alignMiddle}
					]},
				]
			});
			/*alex end for column align*/
            
			ed.addMenuItem('authorgroupform',
            {
                text: 'Author Group',
                context: 'style',
				classes:'Authorgroup',
                onclick: function (e)
                { 
					authorgroup_form_popup_load();	
					
                }
			});	 
            
			ed.addMenuItem('affiliationform',
            {
                text: 'Affiliation',
                context: 'style',
				classes:'Affiliation',
                onclick: function (e)
                { 
					affiliation_form_popup_load();
                }
			});	 
            
			ed.addMenuItem('keywordsform',
            {
                text: 'Keywords',
                context: 'style',
				classes:'Keywords',
                onclick: function (e)
                { 					
					//jQuery('.loader').show(); 					
					var chk_fst = 0; //if 0 means keywords insert newly 1 means already keywords there we need to edit.	 	 					
					var keywords_lists;										
										
					var ele_keywords = tinymce.activeEditor.dom.getParent(tinymce.activeEditor.selection.getNode(), 'p'); 
                    $divclass = ele_keywords.getAttribute("class");					
					
					if($divclass==="Keywords"){				
						keywords_lists = ele_keywords.innerText;
						//console.log(keywords_lists);																
															                         
                        chk_fst = 1;					
					}			
																					
					var file_id = $('#exist_file_id').val(); 
					var temp_filename = $('#exist_file_name').val(); 
					var temp_filesourcepath = $('#exist_file_path').val();
									
					//triggerclick("KeywordGroup");
					$('#example_ifr').css('width', '100%');   
					$('#example_ifr').parent().append("<div class='RightSidePanel'><div class='Parastyles' style='position:relative;left:0;'><div id='pstyleslist'  style='width:28%'></div></div> ");
									
					$("#pstyleslist").load($keywordsform, {
						HOSTNAME: $HOSTNAME,
						FILEID: file_id,
						FILENAME: temp_filename,
						FILESOURCEPATH: temp_filesourcepath,
						CheckFirst: chk_fst,
						KeywordsLists: keywords_lists
					},				
					function () { 		
						jQuery('.loader').hide();		
					});						
 									
 						
                }
			});	 

			// added by sankar
            ed.shortcuts.add('alt+m', 'mathmarker', function () {
                triggerclick("Math Marker");
            });
            ed.shortcuts.add('alt+n', 'generatemath', function () {
                triggerclick("Generate Math");
            });
			
			ed.shortcuts.add('alt+shift+t', 'FpagetoArticleID', function () {
                //convert Fpage to Articleid(pubid) in reference
                FpagetoArticleID();
            });
            //

			//Shortcut keys start by alex
			
			ed.shortcuts.add('ctrl+shift+1', 'Institution', function(){  
				ShortCutstyles_PHPLoad("Institution", "inline");
			});
			ed.shortcuts.add('ctrl+shift+2', 'StreetDetails', function(){  
				ShortCutstyles_PHPLoad("StreetDetails", "inline");
			});
			ed.shortcuts.add('ctrl+shift+3', 'City', function(){  
				ShortCutstyles_PHPLoad("City", "inline");
			});
			ed.shortcuts.add('ctrl+shift+4', 'State', function(){  
				ShortCutstyles_PHPLoad("State", "inline");
			});			
			ed.shortcuts.add('ctrl+shift+5', 'PinCode', function(){  
				ShortCutstyles_PHPLoad("PinCode", "inline");
			});
			ed.shortcuts.add('ctrl+shift+6', 'Country', function(){  
				ShortCutstyles_PHPLoad("Country", "inline");
			});
			ed.shortcuts.add('ctrl+shift+M', 'Minus', function(){  
				ShortCutstyles_PHPLoad("Minus", "inline");
			});
			ed.shortcuts.add('ctrl+shift+H', 'Ndash', function(){  
				ShortCutstyles_PHPLoad("Ndash", "inline");
			});
			ed.shortcuts.add('ctrl+shift+S', 'Thinsp', function(){  
				ShortCutstyles_PHPLoad("Thinsp", "inline");
			});
			ed.shortcuts.add('alt+I', 'Insert Link', function(){  
				ShortCutstyles_PHPLoad("Insert Link", "inline");
			});
			/*ed.shortcuts.add('alt+shift+R', 'RefEditor', function(){ 
				var element0 = tinymce.activeEditor.dom.getParent(tinymce.activeEditor.selection.getNode(), 'div');
                $divclass = element0.getAttribute("class");
				if($divclass=="references")
				{
					ShortCutstyles_PHPLoad("RefEditor", "inline");
				}				
			});
			ed.shortcuts.add('alt+shift+R', 'RefManager', function(){ 
				var element0 = tinymce.activeEditor.dom.getParent(tinymce.activeEditor.selection.getNode(), 'div');
                $divclass = element0.getAttribute("class");
				if($divclass=="references")
				{
					ShortCutstyles_PHPLoad("RefManager", "inline");
				}				
			});*/
			ed.shortcuts.add('alt+shift+N', 'AuthorTag', function(){
				ShortCutstyles_PHPLoad("AuthorTag", "inline");
			});
			ed.shortcuts.add('alt+shift+Y', 'Year', function(){  
				ShortCutstyles_PHPLoad("YEAR", "inline");
			});
			ed.shortcuts.add('alt+shift+B', 'BK Title', function(){  
				ShortCutstyles_PHPLoad("BTITLE", "inline");
			});
			ed.shortcuts.add('alt+shift+A', 'Article Title', function(){  
				ShortCutstyles_PHPLoad("ATITLE", "inline");
			});
			ed.shortcuts.add('alt+shift+J', 'Title', function(){  
				ShortCutstyles_PHPLoad("JTITLE", "inline");
			});
			ed.shortcuts.add('alt+shift+M', 'Volume Number', function(){  
				ShortCutstyles_PHPLoad("VOLUME", "inline");
			});
			ed.shortcuts.add('ctrl+shift+I', 'Issue Number', function(){  
				ShortCutstyles_PHPLoad("ISSUE", "inline");
			});
			ed.shortcuts.add('alt+shift+F', 'Fpage', function(){  
				ShortCutstyles_PHPLoad("FPAGE", "inline");
			});
			ed.shortcuts.add('alt+shift+P', 'Lpage', function(){  
				ShortCutstyles_PHPLoad("LPAGE", "inline");
			});
			ed.shortcuts.add('alt+shift+C', 'Chapter Title', function(){  
				ShortCutstyles_PHPLoad("CTITLE", "inline");
			});
			ed.shortcuts.add('alt+shift+E', 'Edited Book', function(){  
				ShortCutstyles_PHPLoad("BTITLE", "inline");
			});
			ed.shortcuts.add('alt+shift+D', 'Edited Book', function(){  
				ShortCutstyles_PHPLoad("Author", "inline");
			});
			ed.shortcuts.add('ctrl+shift+G', 'Edited Book', function(){
				var getnode=tinymce.activeEditor.selection.getNode();
				var tagname=getnode.localName;
				var seletctedinnertext=getnode.outerHTML.replace(/(<\w+([^><]+)?>)/,"").replace('</'+tagname+'>',"");
				getnode.outerHTML = seletctedinnertext;
			});
			//update start on shortcut key by alex
			ed.shortcuts.add('alt+a', 'Direct PDF', function(){ 
				splitButton_JxFormatter("Direct_JXFormatterPDF");
			});
			ed.shortcuts.add('alt+shift+a', 'PS PDF', function(){
				splitButton_JxFormatter("PS_JXFormatterPDF");
			});
			ed.shortcuts.add('alt+shift+l', 'Print PDF', function(){
				triggerclick("Print PDF");
			});
			ed.shortcuts.add('alt+l', 'Latex PDF', function(){
				triggerclick("Latex PDF");
			});
			//Shortcut keys end by alex
			
			//added by sathish-start     
			ed.addMenuItem('AddFootnote',
            {
                text: 'Add Footnote',
                context: 'style',
				classes:'AddFootnote',
                onclick: function (e)
                {
					//debugger;
					var get_tablediv=tinyMCE.activeEditor.selection.dom.getParent(tinyMCE.activeEditor.selection.getNode(),"div[class='TABLE']");
					var get_table=$(get_tablediv).find('table'); 
					let get_ptable=$(get_tablediv).find("p[class='TABLE-FOOT']");
					if(get_ptable.length>=1)
					{
						tinyMCE.activeEditor.windowManager.open({
							title: "Add Footnote",
							html: "<div id='footnotecmt'><div class='radiodiv'><div class='before' style='margin-left: 15px;margin-top: 10px;'><input type='radio' class='radioBtnClass' id='before' name='radiobtn' value='before'><label class='lblbefore' for='before' style='margin-top: 2px;margin-left: 4px;'>Before</label></div><div class='after' style='margin-left: 127px;margin-top: -19px;'><input type='radio' class='radioBtnClass' id='after' name='radiobtn' value='after'><label class='lblafter' for='after' style='margin-top: 2px;margin-left: 4px;'>After</label></div></div><br><textarea id='footnote_textarea' style='background: white;width: 478px;height: 100px; margin: 10px;border: 1px solid;white-space: pre-line;font-size: 16px;'></textarea></div>",
							width: 350,
							height: 160,
							buttons: [{
									text: "Ok",
									name: 'OkButton',
									onclick: function () {
										debugger;
										var getcommentText=$('#footnote_textarea').val();
										var get_tablediv=tinyMCE.activeEditor.selection.dom.getParent(tinyMCE.activeEditor.selection.getNode(),"div[class='TABLE']");
										var get_table=$(get_tablediv).find('table');
										var raido_val=$("input[type='radio'].radioBtnClass:checked").attr('id');
										if(get_table[0].nodeName=="TABLE")
										{
											var getnode=tinyMCE.activeEditor.selection.getNode();
											if(raido_val=="before")
											{
												var set_footnotecontent="<p class='TABLE-FOOT'>"+getcommentText+"</p>";
												getnode.insertAdjacentHTML("beforebegin",set_footnotecontent);												
											}
											else
											{
												
												var set_footnotecontent="<p class='TABLE-FOOT'>"+getcommentText+"</p>";
												getnode.insertAdjacentHTML("afterend",set_footnotecontent);
												//tinymce.activeEditor.selection.setContent("<p class='TABLE-FOOT'>"+getcommentText+"</p>")
											}											
											tinyMCE.activeEditor.windowManager.close();				
										}
										else
										{
											alert('Selected position is not a table Content');
										}
															
									}
								}, {
									text: "Close",
									onclick: function(){								
										tinyMCE.activeEditor.windowManager.close();
									}
								}],
								onOpen: function (e) {
							},
						});
					}
					else
					{
						tinyMCE.activeEditor.windowManager.open({
							title: "Add Footnote",
							html: "<div id='footnotecmt'><textarea id='footnote_textarea' style='background: white;width: 478px;height: 100px; margin: 10px;border: 1px solid;white-space: pre-line;font-size: 16px;'></textarea></div>",
							width: 350,
							height: 160,
							buttons: [{
									text: "Ok",
									name: 'OkButton',
									onclick: function () {
										debugger;
										var getcommentText=$('#footnote_textarea').val();
										var get_tablediv=tinyMCE.activeEditor.selection.dom.getParent(tinyMCE.activeEditor.selection.getNode(),"div[class='TABLE']");
										var get_table=$(get_tablediv).find('table');
										if(get_table[0].nodeName=="TABLE")
										{
											var set_footnotecontent="<p class='TABLE-FOOT'>"+getcommentText+"</p>";
											get_table[0].insertAdjacentHTML("afterend",set_footnotecontent);
											//tinymce.activeEditor.selection.setContent("<p class='TABLE-FOOT'>"+getcommentText+"</p>")
											tinyMCE.activeEditor.windowManager.close();				
										}
										else
										{
											alert('Selected position is not a table Content');
										}
															
									}
								}, {
									text: "Close",
									onclick: function(){								
										tinyMCE.activeEditor.windowManager.close();
									}
								}],
								onOpen: function (e) {
							},
						});
					}				
				}					
			});					
			//added by sathish-start			
			ed.addMenuItem('Backmatterreorder',
            {
                text: 'Back Matter Reorder',
                context: 'style',
				classes:'Backmatterreorder',
                onclick: function (e)
                {						
 					backmatterreorder();	
                }
			});
			//added by sathish- end						  
			ed.shortcuts.add('ctrl+shift+C', 'Copy_Paste_Special ', function(){  
				//debugger;		ctrl+shift+X-->Copy		
				copypastspecial();
			});
			ed.shortcuts.add('alt+shift+V', 'Copy_Paste_Special ', function(){  
				//debugger;		alt+shift+D-->Paste					
				copypastspecial1();
			});          	 
			
			function copypastspecial()
			{
				//debugger;
				//alert('copypaste');
				var gettag = tinyMCE.activeEditor.selection.getNode();
				
				var tag="";
				if(gettag.nodeName!='P')
				{
					if(gettag.nodeName=='B' || gettag.nodeName=='I')
					{
						var parentnode=gettag.parentNode;
						if(parentnode.nodeName=='SPAN')
						{
							tag=parentnode.outerHTML;
						}
						else
						{
							tag=gettag.outerHTML;
						}
					}
					else if(gettag.nodeName=='SPAN')
					{
						tag=gettag.outerHTML;
					}
				}				
				else
				{
					return;
				}				
				//localStorage.setItem("gettag ", gettag);
				$('#example_ifr').css('width', '100%');   
				$('#example_ifr').parent().append("<div class='RightSidePanel'><div class='Parastyles' style='position:relative;left:0;'><div id='pstyleslist'  style='width:28%'></div></div> ");
				$("#pstyleslist").load($Copy_Paste_Special, {
					HOSTNAME: $HOSTNAME,
					COPYTAG: tag,
					PROCESS: 'copy'
				},				
				function () { 		
					jQuery('.loader').hide();		
				});					
			}
			function copypastspecial1()
			{
				//debugger;
				//var getNode=tinyMce.activeEditor.selection.getNode();
				var Selected_text = tinyMCE.activeEditor.selection.getContent();				
				$('#example_ifr').css('width', '100%');   
				$('#example_ifr').parent().append("<div class='RightSidePanel'><div class='Parastyles' style='position:relative;left:0;'><div id='pstyleslist'  style='width:28%'></div></div> ");
				$("#pstyleslist").load($Copy_Paste_Special, {
					HOSTNAME: $HOSTNAME,
					SELECTEDTEXT: Selected_text
					
				},				
				function () { 		
					jQuery('.loader').hide();		
				});	
			}
			//added by sathish-end
			
			ed.addButton('ce_auto', {
                text: 'CE Auto',
                classes: "ce_auto",
                onclick: function () {
					
					jQuery('.loader').show();
                    $.ajax({
                        type: 'post',
                        url: base_url + "home/ce_automation_process/",
                        data: {},
                        success: function (response) {							
							var content = ed.getContent();
                            ed.setContent(response);												
							
							alert("Success");
							jQuery('.loader').hide(); 
											
							triggerclick("Track");										
													
							
                        }
                    });

					
                }
            });	 	 

			ed.addButton('ahsvrpdf_generation', {
                text: 'JXFormatter',
                classes: "JXFormatter",
                onclick: function () {
					//jQuery('.loader').show();
					$.ajax({		
						url: base_url + "home/get_pdf_from_ahsvr_API/",	
						method     : 'POST',
						//beforeSend : loading(),
						dataType   : 'json',
						//data       : 'action=submit_editor_file&fm_id='+reqId+'&temp_stage='+tm_stage,	
						success: function(response){				
							//console.log(response);
							if(response.success==200){
								alert("PDF Generated successfully");
								
								window.location = base_url + "home/downloadfile/ahsvrpdf/pdf";
							}
							else if(response.error==101){
								alert(response.error_message);
							}
							else{
								alert("Something went wrong, please check with support team.");
							}
							
							
							jQuery('.loader').hide(); 		
						}		
					});		

					
                }
            });		
            
            ed.addButton('SubmitEditorFile', {
                text: 'Submit',
                classes: "SubmitEditorFile",
                onclick: function () {
					//jQuery('.loader').show();
					//alert('SubmitEditorFile');
					chk_submit_flag=1;
					triggerclick("Generate XML");
                }
            });
			
			ed.addButton('SkipEditorFile', {
                text: 'Skip',
                classes: "SkipEditorFile",
                onclick: function () {
					//jQuery('.loader').show();
					
					var temp_baseurl = base_url.replace("ce_editor", "products_ce_editor"); 
					temp_baseurl+='file_actions.php';
					var reqId = $('#exist_file_id').val();
					var tm_stage = $('#temp_stage').val();
					
					var con = confirm("Are sure to skip this file?");
                    if (con) {
                        jQuery('.loader').show();  				
						$.ajax({		
							url		   : temp_baseurl,	
							method     : 'POST',
							dataType   : 'json',
							data       : 'action=skip_editor_file_submission&fm_id='+reqId+'&temp_stage='+tm_stage,		
							success: function(response){
								if(response.rslt == '1'){	
									alert("Success");	
									//$(location).attr('href', response.redirect_page);
									window.location.href =response.redirect_page;
								}
								else{					
									alert("Error : "+response.ermsg);
									jQuery('.loader').hide();
								}  
							}		
						});	
                    }										
                }
            });

			ed.addMenuItem('author-style', {
                text: 'Author-style',
				classes:"author-style",	
                onclick: function () {                    
					var ed = tinyMCE.get('example');
					var sel_content = ed.selection.getContent({format: 'text'});
					sel_content = encodeURIComponent(sel_content);
					//console.log(ed.selection.getContent());					
					if(sel_content !==''){
						$.ajax({
							url        : base_url + 'home/authorstyle_get',
							method     : 'POST',
							dataType   : 'json',
							data       : 'sel_content='+sel_content+'&diff=1',
							beforeSend: function() { jQuery('.loader').show(); },
							success: function(response){ 	
								if(response.rslt_content === false || response.rslt_content === "error"){
									alert("Something went wrong, please check with support team!!!");
								}
								else{
									ed.selection.setContent(response.rslt_content);
								}
								
								jQuery('.loader').hide();									
							}
						});		
						
					}
					
                }
            });

			ed.addButton('upload_html_files', {
				text: 'Upload HTML Files',
				classes:"upload_html_files",
				onclick: function() {			
					tinyMCE.activeEditor.windowManager.open({
						title: "Upload File",
						html: '<form method="post" action="" enctype="multipart/form-data" id="myform"> <div ><input type="file" id="fup_htmlfile" name="fup_htmlfile"  accept=".html" /></div></form>',
						width: 300,
						height: 70,
						buttons: [{
							text: "Upload",
							onclick: function () {
								jQuery('.loader').show();
								var fd = new FormData();
								var files = $('#fup_htmlfile')[0].files[0];
								fd.append('file',files);

								$.ajax({									
									url: base_url + 'home/upload_html_file',
									type:'post',
									data:fd,
									contentType: false,
									processData: false,
									success:function(response){
										if(response == "success"){
											
											var ed = tinyMCE.activeEditor;
											$.ajax({
												'async': false,
												'type': "POST",
												'global': false,
												'dataType': 'html',
												'url': base_url + 'home/HTML_Text',
												'success': function (data) {
													$rs = data;
													var content = ed.getContent();
													ed.setContent($rs);
													
												}
											});
											alert('File uploaded successfully!');
											tinyMCE.activeEditor.windowManager.close();
											jQuery('.loader').hide();
											
										}else{
											alert(response);
											jQuery('.loader').hide();
										}
									}
								});
							}
						}, {
							text: "Close",
							onclick: "close"
						}]

					});
				}			
			});			
		/*--------------nagarajbabu added this button for AM Tools - END  ---------*/	
				 
            	 
            
	/*--------------		 End  ---------*/
			ed.addButton('UP_STEP11', {
			text: 'Upload Files',
			classes:"Upload_Files",
			onclick: function() {	
				//debugger;
			    tinyMCE.activeEditor.windowManager.open({
                        title: "Upload File",
                        html: '<form method="post" action="" enctype="multipart/form-data" id="myform"> <div ><input type="file" accept=".zip" id="file" name="file" /></div></form>',
                        width: 300,
                        height: 70,
						//excludeAcceptAllOption: true,
						//multiple: false,
                        buttons: [{
                                text: "Upload",
                                onclick: function () {
									//debugger;
                                    var fd = new FormData();
									var files = $('#file')[0].files[0];
									//var filetype=file.name.replace(/\.(.*)/,"$2");
									var filetype=files.name.match(/([^.]+$)/);;
									if(filetype[0]=="zip")
									{
										if(files!=undefined)
										{
											//var files_path = $('#file')[0].files[0].mozFullPath;
											fd.append('file',files);
											$.ajax({
												// url:'http://Integra.co/Integra/ce_editor_ragu1/support/upload_ajax/upload.php',
												 //url: base_url + 'home/uploadfile',-->old
												 url: base_url + 'home/Upload_Zipfile',
												type:'post',
												data:fd,
												contentType: false,
												processData: false,
												success:function(response){
													//debugger;
													if(response == "success"){
													   alert('File uploaded successfully');
													}
													else if(response == "movefileerror"){
													   alert('File movement unsuccess');
													}
													else{
														alert('File not uploaded');
													}
												}
											});
											$('.mce-close').trigger('click');
										}
										else
										{
											alert('Please select a file!');
											return;
										}
									}
									else
									{
										tinyMCE.activeEditor.windowManager.alert("Please select only Zip file..!");
									}
									
                                }
                            }, {
                                text: "Close",
                                onclick: "close"
                            }]

                });

					
			}
			});
			

			
			

            ed.addButton('GenerateLatex', {
                text: 'Generate Latex',
                classes: "GenerateLatex",
                onclick: function () {
                    latex_xml("manual");
                }
            });
			ed.addButton('GenerateDVI', {
                text: 'Generate DVI',
                classes: "generateDVI",
                onclick: function () {
                    download_tex();

                }
            });
            ed.addButton('spellcheck', {
                text: 'Spell Check',
                classes: "spellcheck",
                onclick: function () {
                    livespell.spellingProviders[0].CheckInWindow();
                    /* tinyMCE.activeEditor.windowManager.open(
                     {
                     title: "Spell Check",
                     width: 1000,
                     height: 400,
                     buttons: [
                     {
                     text: 'Close',
                     onclick: 'close'          
                     }
                     ]
                     }); */


                }
            });
			
            // adding sub menu
            ed.addMenuItem('AM_Tools', {
                text: 'AM Tools',
                context: 'Integra',
                onclick: function () {
                    $hi = $(".mce-toolbar-grp").height();

                    $("div[role='toolbar']:nth-child(1)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(2)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(3)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(5)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(6)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(8)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(9)").fadeOut(0);

                    $("div[role='toolbar']:nth-child(4)").fadeIn(1000);
                    $("div[role='toolbar']:nth-child(7)").fadeIn(1000);


                    //$( "div[aria-label='Xpert']").fadeIn(1000);


                    $(".mce-toolbar-grp").css({"height": $hi});
                }
            });
			
			
            // adding sub menu
            ed.addMenuItem('Pre_Editing', {
                text: 'Pre Editing',
                context: 'Integra',
                onclick: function () {
                    /*                    
                    $hi = $(".mce-toolbar-grp").height();

                    $("div[role='toolbar']:nth-child(1)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(2)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(3)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(5)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(6)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(8)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(9)").fadeOut(0);

                    $("div[role='toolbar']:nth-child(4)").fadeIn(1000);
                    $("div[role='toolbar']:nth-child(7)").fadeIn(1000);


                    //$( "div[aria-label='Xpert']").fadeIn(1000);


                    $(".mce-toolbar-grp").css({"height": $hi}); */ 
                    display_menu_by_menuname('Pre_Editing');
                }
            });
			
			ed.addMenuItem('download_options', {
                text: 'Download Options',
                context: 'Integra',
                onclick: function () {
                    /*
                    $hi = $(".mce-toolbar-grp").height();
                    $("div[role='toolbar']:nth-child(3)").fadeIn(1000);


                    $("div[role='toolbar']:nth-child(1)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(2)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(4)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(5)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(6)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(7)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(8)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(9)").fadeOut(0);
                    $(".mce-toolbar-grp").css({"height": $hi});
					
					
					//chk_xml_download.show();
					//chk_html_download.hide();
                    */
                    
					display_menu_by_menuname('download_options'); 
					                
                }
            });
			
            ed.addMenuItem('Copy_Editing', {
                text: 'Copy Editing',
                context: 'Integra',
                onclick: function () {
                    /*
                    $hi = $(".mce-toolbar-grp").height();

                    //$("div[role='toolbar']:nth-child(5)").fadeIn(1000);
                    $("div[role='toolbar']:nth-child(7)").fadeIn(1000);
                    $("div[role='toolbar']:nth-child(8)").fadeIn(1000);

                    $("div[role='toolbar']:nth-child(1)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(2)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(3)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(4)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(6)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(9)").fadeOut(0);

                    $(".mce-toolbar-grp").css({"height": $hi});
                    */
                    
                    display_menu_by_menuname('Copy_Editing');
                }
            });

            ed.addMenuItem('XML_Team', {
                text: 'XML/PDF',
                context: 'Integra',
                onclick: function () {
                    /*
                    $hi = $(".mce-toolbar-grp").height();

                    $("div[role='toolbar']:nth-child(6)").fadeIn(1000);
                    $("div[role='toolbar']:nth-child(7)").fadeIn(1000);

                    $("div[role='toolbar']:nth-child(9)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(1)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(2)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(4)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(5)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(3)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(8)").fadeOut(0);

                    $(".mce-toolbar-grp").css({"height": $hi});
                    */
                    
					display_menu_by_menuname('XML_Team'); 
                }
            });

            ed.addMenuItem('LATEX_Team', {
                text: 'LATEX',
                context: 'Integra',
                onclick: function () {
                    /*
                    $hi = $(".mce-toolbar-grp").height();

                    $("div[role='toolbar']:nth-child(9)").fadeIn(1000);

                    $("div[role='toolbar']:nth-child(6)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(8)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(1)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(2)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(4)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(5)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(3)").fadeOut(0);
                    $("div[role='toolbar']:nth-child(7)").fadeOut(0);


                    $(".mce-toolbar-grp").css({"height": $hi});
                    */
                    
					display_menu_by_menuname('LATEX_Team'); 
                }
            });

            ed.addMenuItem('Complete', {
                text: 'Submit',
                context: 'Integra',
                onclick: function () {

                    /* To save File */
                    FileSave();

                    /*  To update Automation DB */

                    $id = window.location.href;
                    $id = $id.replace(/(.*)(\/)(.*?)(\/)(.*)/, '$3');

                    $.ajax({
                        'async': false,
                        'type': "POST",
                        'global': false,
                        'dataType': 'html',
                        'url': base_url + 'home/UpdateAutomationDB',
                        data: {id: $id},
                        'success': function (data)
                        {
                            /*  To show or redirect to another page */
                            window.location.href = base_url + 'home/submit';
                        }
                    });


                }
            });

            ed.addMenuItem('ReRun', {
                text: 'Re-Run',
                context: 'Integra',
                onclick: function ()
                {
                    FileSave();
                    tinymce.activeEditor.windowManager.confirm("Do you want Re-Run this File?", function (s)
                    {
                        if(s)
                        {
                            $id = window.location.href;
                            $id = $id.replace(/(.*)(\/)(.*?)(\/)(.*)/, '$3');

                            $.ajax({
                                'async': false,
                                'type': "POST",
                                'global': false,
                                'dataType': 'html',
                                'url': base_url + 'home/ReRunAutomationDB',
                                data: {id: $id},
                                'success': function (data)
                                {
                                    tinyMCE.activeEditor.windowManager.alert("File reprocess started");
                                }
                            });
                        }
                    });
                }
            });


            ed.addMenuItem('Disp_math', {
                text: 'Add Display math',
                context: 'math',
                onclick: function () {
					maedit = true;
                    $newmathtype = "disp_math";
                    $clid = "";
					var inlineid = ed.getBody().getElementsByClassName('DISP-EQUATION');
         
					$id=inlineid.length;
					$.ajax({
						'async': false,
						'type': "POST",
						'global': false,
						'dataType': 'html',
						'url': base_url + 'home/emptyequfile',
						success: function (result) {
							//alert(result);
						}
					});						
					var element2 = ed.selection.getNode();
					
					$mathid=$id+1;
					$mathclass="DISP-EQUATION";
					ed.windowManager.open({
						title: 'Math Editor',
						url: $VisualMathEditor,
						buttons: [{
								text: 'Save',					  
								subtype: 'primary',
								onclick: function(e) {
								  
								jQuery('.loader').show();
								$TexMath="";
								$TexMath = $('iframe').contents().find('#mathVisualOutput script').text();
								$('iframe').contents().find('#OutputHTML').html("$$"+" "+"$$");
								$.getScript($MathJax_link, function() {
									MathJax.Hub.Queue(["Typeset",MathJax.Hub,"OutputHTML"]);
									console.debug('MathJax Script loaded.');
								});
								 //$mathid++;
								
								  
								$.ajax({
									'async': false,
									'type': "POST",
									'global': false,
									'dataType': 'html',
									'url': base_url+'home/writmathhtml',
									data:{data:$TexMath,mathid:"disp"+$mathid,mathclass:$mathclass},
									'success': function (data) {

										$('iframe').contents().find('#OutputHTML').html('<iframe id="Transmatheditor" src="'+data+'"></iframe>');	
										setTimeout(function(){
											var iContentBody = $("iframe").contents().find("#OutputHTML");
											var divInnerFormText = $("iframe").contents().find("#OutputHTML").find("#Transmatheditor").contents().find("p").html();
					
					
											divInnerFormText = divInnerFormText.replace("<div ","<span ");
											divInnerFormText = divInnerFormText.replace("</div>","</span>");
											//divInnerFormText = divInnerFormText.replace(/MathJax-Element-1/g,$scriptid);
											divInnerFormText = divInnerFormText.replace(/font-family: (.*?)-(italic)\;/g,"font-family: $1;font-style:$2;");
											divInnerFormText = divInnerFormText.replace(/font-family: (.*?)-(bold)\;/g,"font-family: $1;font-weight:$2;");
					
											var labelid=$("iframe").contents().find("div#eqla").find("#eqla_input").val();
					
											//nagarajbabu added this for math equation dynamic css include to editor
											var dyn_css = $("iframe").contents().find("#OutputHTML").find("#Transmatheditor").contents().find("#MJX-CHTML-styles").html();	
											//divInnerFormText +='<style class="innermathcls">'+dyn_css+'</style>';									
											var css = document.createElement('style'); 	
											css.type = 'text/css'; 	
											//css.id = 'innermathcls'; 		
											if (css.styleSheet)  
												css.styleSheet.cssText = dyn_css; 
											else  
												css.appendChild(document.createTextNode(dyn_css)); 	
											tinyMCE.editors[0].contentWindow.document.head.appendChild(css); 	
			
											//$(element2).html(divInnerFormText);
											ed.selection.setContent("<p class=\"DISP-EQUATION\"><span id=\"disp"+$mathid+ "\" class=\"disp\" contenteditable=\"false\">"+divInnerFormText+"<span class=\"TEX\">$$" + $TexMath + "$$</span></span><span class=\"EQLABEL\">"+labelid+"</span></p>");
											//console.log(divInnerFormText);
					
							
											var content = tinyMCE.editors[0].contentWindow.document.documentElement.outerHTML;
											tinymce.activeEditor.setContent(content);
							
											tinymce.activeEditor.windowManager.close();
											jQuery('.loader').hide();
										},5000);
									}
								});
							}
						},{
							text: 'Cancel',
							onclick: 'close'
						}],
						width: 1000,
						height: 420,
					});

                }
            });
			
			 ed.addMenuItem('inline_fig', {
                text: 'Add inline fig',
                context: 'math',
                onclick: function () {
                    var slnode = tinymce.activeEditor.selection.getContent({format: "html"});
                    if (slnode == "") {
                        var inlineFig = ed.dom.select(".INLINEFIG");
                        var len = $(inlineFig).length;
                        tinymce.activeEditor.selection.setContent('<span class="INLINEFIG" id="inline-' + (len + 1) + '.tif"></span>');
                    }
                }
            });
			
            ed.addMenuItem('inline_math', {
                text: 'Add inline math',
                context: 'math',
                onclick: function () {
                    maedit = true;
                    $newmathtype = "inl_math";
                    $clid = "";
				
					var element2 = ed.selection.getNode();
					var inlineid = ed.getBody().getElementsByClassName('inline');
         
					$id=inlineid.length;
		
					$.ajax({
						'async': false,
						'type': "POST",
						'global': false,
						'dataType': 'html',
						'url': base_url + 'home/emptyequfile',
						success: function (result) {
							//alert(result);
						}
					});						
					
					
					$mathid=$id+1;
					//alert($mathid);
					$mathclass="inline";
					ed.windowManager.open({
						title: 'Math Editor',
						url: $VisualMathEditor,
						buttons: [{
							text: 'Save',
							subtype: 'primary',
							onclick: function(e) {
								  
								jQuery('.loader').show();

								$TexMath = $('iframe').contents().find('#mathVisualOutput script').text();
								$('iframe').contents().find('#OutputHTML').html("$$"+" "+"$$");
								$.getScript($MathJax_link, function() {
									MathJax.Hub.Queue(["Typeset",MathJax.Hub,"OutputHTML"]);
									console.debug('MathJax Script loaded.');
								});
								
								//$id++;
								$.ajax({
									'async': false,
									'type': "POST",
									'global': false,
									'dataType': 'html',
									'url': base_url+'home/writmathhtml',
									data:{data:$TexMath,mathid:"in"+ $mathid,mathclass:$mathclass},
									'success': function (data) {
										//	alert(data);
										$('iframe').contents().find('#OutputHTML').html('<iframe id="Transmatheditor" src="'+data+'"></iframe>');	
										setTimeout(function(){
											var iContentBody = $("iframe").contents().find("#OutputHTML");

											var divInnerFormText = $("iframe").contents().find("#OutputHTML").find("#Transmatheditor").contents().find("p").html();
											//$mathid++;
											divInnerFormText = divInnerFormText.replace("<div ","<span ");
											divInnerFormText = divInnerFormText.replace("</div>","</span>");
											//divInnerFormText = divInnerFormText.replace(/MathJax-Element-1/g,$scriptid);
											divInnerFormText = divInnerFormText.replace(/font-family: (.*?)-(italic)\;/g,"font-family: $1;font-style:$2;");
											divInnerFormText = divInnerFormText.replace(/font-family: (.*?)-(bold)\;/g,"font-family: $1;font-weight:$2;");
											
											var labelid=$("iframe").contents().find("div#eqla").find("#eqla_input").val();
					
											var dyn_css = $("iframe").contents().find("#OutputHTML").find("#Transmatheditor").contents().find("#MJX-CHTML-styles").html();	
																	
											var css = document.createElement('style'); 	
											css.type = 'text/css'; 	
													
											if (css.styleSheet)  
												css.styleSheet.cssText = dyn_css; 
											else  
												css.appendChild(document.createTextNode(dyn_css)); 	
											tinyMCE.editors[0].contentWindow.document.head.appendChild(css);
							
											ed.selection.setContent("<span id=inl"+$mathid+" class=\"inline\" contenteditable=\"false\">"+divInnerFormText+"<span class=\"TEX\">$" + $TexMath + "$</span></span>");
											//$(element2).html(divInnerFormText);
											//console.log(divInnerFormText);
							
											tinymce.activeEditor.windowManager.close();
											jQuery('.loader').hide();
										},5000);
									}
								});
							}
						},{
							text: 'Cancel',
							onclick: 'close'
						}],
						width: 1000,
						height: 420,
					});
                }
            });
			
            ed.addMenuItem('googlesearch', {
                text: 'Google Search',
                image: base_url + 'assets/editor/img/circle.svg',
                //onPostRender: postRenderCell,
                classes: 'googlesearch',
                onclick: function () {
                    var word = tinymce.activeEditor.selection.getContent({format: 'text'});
                    window.open('https://www.google.com/?q=' + word + '', '_blank');
                }
            });
			
			ed.addMenuItem('insertcomment', {
                text: 'Insert Comment',
				image: base_url + 'assets/editor/img/Icomment.svg',
                classes: 'insertcomment',
                onclick: function () {
					debugger;
					console.log(base_url);
                    Insertcomment("", "new", $.now());
                }
            });
			
			//Apply affiliation domain start - sankar 
			ed.addMenuItem('adddomain', {
                text: 'Add Domain',	  
                classes: 'adddomain',
                onclick: function () {
                    // validation
                    var usr_content = "";
                    var parnt_elmnt = ed.dom.getParent(ed.selection.getNode(), 'p');
                    $Parnt_class = parnt_elmnt.getAttribute("class");

                    if ($Parnt_class != "Affiliation") {
                        tinyMCE.activeEditor.windowManager.alert("Invaild selection area..");
                        return;
                    }

                    if ($(parnt_elmnt).find('span.Department').length <= 0 && $(parnt_elmnt).find('span.Institution').length <= 0) {
                        tinyMCE.activeEditor.windowManager.alert("Please check department & Institution not available");
                        return;
                    }

                    if ($(parnt_elmnt).find('span.Country').length <= 0) {
                        tinyMCE.activeEditor.windowManager.alert("Please check country not available ");
                        return;
                    }

                    if ($(parnt_elmnt).find('span.Department').length > 0) {
                        $(parnt_elmnt).find('span.Department').each(function () {
                            usr_content += $('<textarea />').html($(this).text().toLowerCase().trim()).text() + '||';                       
                        });
                    }

                    if ($(parnt_elmnt).find('span.Institution').length > 0) {
                        $(parnt_elmnt).find('span.Institution').each(function () {
                            usr_content += $('<textarea />').html($(this).text().toLowerCase().trim()).text() + '||';
                        });
                    }
                    
                    //if (ed.selection.getNode().getAttribute('class') == 'Department' && $(parnt_elmnt).find('span.Department').length > 1) {
                    //    if (!ed.selection.getContent()) {
                    //        tinyMCE.activeEditor.windowManager.alert("Multiple departments are available, Please select atleast one department");
                    //        return;
                    //    }
                    //    usr_content = ed.selection.getContent();                        
                    //}
                    //else if (ed.selection.getNode().getAttribute('class') != 'Department' && $(parnt_elmnt).find('span.Department').length > 1) {
                    //    tinyMCE.activeEditor.windowManager.alert("Multiple departments are available, Please select atleast one department");
                    //    return;
                    //}

                    //if (ed.selection.getNode().getAttribute('class') != 'Department') {
                    //    tinyMCE.activeEditor.windowManager.alert("Please select valid Department..");
                    //    return;
                    //}
                    
                    var Elmnt_country_name = $('<textarea />').html($(parnt_elmnt).find('span.Country').text().toLowerCase().trim()).text();

                    if (domainData.length <= 0) {
                        load_domaindata();
                    }                   
                    
                    var isFound = '0';

                    if (usr_content) {
                        usr_content = $('<textarea />').html(usr_content.toLowerCase().trim()).text();
                        var splt_content = usr_content.split("||");

                        for (var i = 0; i < domainData.length; i++) {

                            var domainname = $('<textarea />').html(domainData[i].DisplayValue.toLowerCase().trim()).text();
                            var countryname = $('<textarea />').html(domainData[i].Country.toLowerCase().trim()).text();
                            var Domainurl = $('<textarea />').html(domainData[i].DomainName.toLowerCase().trim()).text();

                            for (var m = 0; m < splt_content.length; m++) {
                                if (!!splt_content[m] && domainname == splt_content[m] && Elmnt_country_name == countryname && isFound == '0') {
                                        if ($(parnt_elmnt).find('span.DOMAIN').length > 0) {
                                            $(parnt_elmnt).find('span.DOMAIN').html(Domainurl);
                                            isFound = '1';
                                            tinyMCE.activeEditor.windowManager.alert("Domain name applied successfully");
                                            return;
                                        }
                                        else {
                                            $($(parnt_elmnt).find('span.Country')).after('<span class="FMSEP"> </span><span class="DOMAIN" data-element="DOMAIN">' + Domainurl + '</span>');
                                            isFound = '1';
                                            tinyMCE.activeEditor.windowManager.alert("Domain name applied successfully");
                                            return;
                                        }
                                }
                            }
                        }
                    }

                    if (isFound == '0') {
                        open_domainpanel();
                    }
                    ////
                }
            });
			//Apply affiliation domain end - sankar 
			
            ed.addMenuItem('deletequery', {
                text: 'Delete Query',
                classes: 'deletequery',
                onclick: function () {

                    // Displays an confirm box and an alert message will be displayed depending on what you choose in the confirm
                    tinymce.activeEditor.windowManager.confirm("Do you want delete this Query?", function (s)
                    {
                        if (s)
                        {
                            var ed = tinyMCE.get('example');
                            var element = ed.selection.getNode();
                            element.remove();
                        }
                    });
                }
            });
			/*
			ed.addMenuItem('deletefunderdiv', {
				text: 'Delete Grant Disclosure',
				image: base_url+'/assets/editor/img/delete.png',				
				classes:'deletefunderdiv',
				onclick: function() {
					
					// Displays an confirm box and an alert message will be displayed depending on what you choose in the confirm
					tinymce.activeEditor.windowManager.confirm("Do you want delete this Grant Disclosure?", function(s) 
					{
						if(s)
						{
							var ed = tinyMCE.get('example');
							var element = ed.selection.getNode();
								var refelement = ed.dom.getParent(ed.selection.getNode(), 'div');
							refelement.remove();
						}
					});
				}
			});
			*/
			
			
			/*
            //adding sub menu in context
            //rerun the reference process
            ed.addMenuItem('RerunRef', {
                text: 'Re-run Reference',
                classes: 'RerunRef',
                onclick: function () {

                    // Displays an confirm box and an alert message will be displayed depending on what you choose in the confirm
                    tinymce.activeEditor.windowManager.confirm("Do you want Re-run this Reference?", function (s)
                    {
                        if (s)
                        {
                            ed.setProgressState(1);
                            var elementtxt = ed.dom.getParent(ed.selection.getNode(), 'p');
                            var txt = $(elementtxt).find('.UNSTRUCTREF').html();
                            var attrid = $(elementtxt).attr("id");
                            var attrclass = $(elementtxt).attr("class");
                            var attrcite = $(elementtxt).attr("data-cite");
                            var attrcross = $(elementtxt).attr("data-crossref");
                            $.ajax({
                                'async': false,
                                'type': "POST",
                                'global': false,
                                'dataType': 'html',
                                'url': base_url + 'home/writeref',
                                data: {txt: txt, attrid: attrid, attrcite: attrcite, attrcross: attrcross},
                                success: function (response) {
                                    // alert(response);
                                    ed.setProgressState(0);
                                    $.ajax({
                                        'async': false,
                                        'type': "POST",
                                        'global': false,
                                        'dataType': 'html',
                                        'url': base_url + 'home/readref',
                                        success: function (result) {
                                            var res = result;
                                            var referpara = ed.dom.select("p");
                                            $(referpara).each(function () {
                                                var referid = $(this).attr("id");
                                                if (referid == attrid) {
                                                    // alert(referid +"=="+ attrid);
                                                    var unstr = $(this).find(".UNSTRUCTREF");
                                                    var para = $(unstr).parent("p");
                                                    var df = $(res).find("p");
                                                    $(df).insertBefore(para);
                                                    $(para).remove();
                                                    // FileSave();
                                                }
                                            });
                                            tinymce.activeEditor.windowManager.alert("Reference Refreshed Successfully!!!");
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
*/
			ed.addMenuItem('Refcomponent', {
				text: 'Reference',
				context: 'style',
				classes:'Refcomponent',
				onclick: function () {
					 //jQuery('.loader').show();
					setTimeout(function()
                     {
							var p_element = ed.dom.getParent(ed.selection.getNode(), 'p');
							var element_value=p_element.outerHTML;
							var span_element = element_value.replace(/<\/?p[^>]*>/g, "");
							var unstruct_val= span_element.match(/<span class="(UNSTRUCTREF)"((?:(?!<span class="reflabel">).)*?)<span class="reflabel">((?:(?!<\/span>).)*?)<\/span>/isg);
							var author_group= span_element.replace(/<span class="(UNSTRUCTREF)"((?:(?!<span class="reflabel">).)*?)<span class="reflabel">((?:(?!<\/span>).)*?)<\/span>/isg,"");
							$refclass = p_element.getAttribute("class");
							$refid = p_element.getAttribute("id");
							var ptag_element=element_value.match(/(<p[^<>]+>)((?:(?!<\/p>).)*?)(<\/p>)/);
							var ptag=ptag_element[1];
							$allstr = "";
							$allstr += "refclass=" + $refclass;
							if(p_element.childNodes[2]==undefined){
								alert('No data found');
								jQuery('.loader').hide();
							}else{
							$label = p_element.childNodes[2].outerHTML;
							var x = p_element.getElementsByClassName("QUERY");
							var i, allqueries = "";
							for (i = 0; i < x.length; i++) {
								allqueries += x[i].outerHTML;
							}
							p_element.querySelectorAll('.QUERY').forEach(function (a) {
								a.remove();
							});
							$(p_element).append(allqueries);
							for ($i = 0; $i < p_element.childNodes.length; $i++) {
								// $childclass = element.childNodes[$i].getAttribute("class");
								$childclass = p_element.childNodes[$i].className;
								if ($childclass == "SEP" || $childclass == null || $childclass == "undefined" || $childclass == undefined) {

								} else {
									$allstr += ":REFSEP;" + $childclass + ":TYPSEP;" + p_element.childNodes[$i].innerHTML;

								}
							}
							$allstr = $allstr.replace(/'/g, "&#x0027;");
							$inipath = null;
							$.ajax({
								'async': false,
								'type': "POST",
								'global': false,
								'dataType': 'html',
								'url': base_url + 'home/GETBIB_SEPERATORS',
								'success': function (data) {
									$inipath = $.trim(data);
									
								}
							});
							var get_file_path = $('#exist_file_path').val();
							var jnl_name = get_file_path[get_file_path.length - 3];
							var pub_Name = get_file_path[get_file_path.length - 4];
							$('#example_ifr').css('width', '100%');
							$('.RightSidePanel').remove();
							$('#pstyleslist').remove();
							$('#example_ifr').parent().append("<div id='pstyleslist' style='width:28%'></div> ");
							$("#pstyleslist").load($ref_component, {
								HOSTNAME: $HOSTNAME,
								reftext: $allstr,
								refclass: $refclass,
								inipath: $inipath,  
								JNL_NAME: jnl_name, 
								PUB_NAME: pub_Name,
								DIFFERENCE: "references",
								label:$label,
								allqueries: author_group,
								unstruct_val:unstruct_val[0],
								refid:$refid,
								ptag:ptag
							},				
							function () { 		
								//jQuery('.loader').hide();
							});
							var element = ed.selection.getNode();
							if (element != null) {
								element.scrollIntoView(true);
								ed.focus();
							}
							if ($refid) {
								scrollview_ref($refid);
							}
						}
				}, 100);
				}
			});	
			ed.addMenuItem('InsertRef', {
                text: 'Insert Reference',
                // image: base_url + '/assets/editor/img/delete.png',
                classes: 'InsertRef',
                onclick: function () {
                    var verify_dupli_ref_insert = tinyMCE.activeEditor.contentDocument.querySelector('div.references').querySelector('.DUPE-REF');
                    if(verify_dupli_ref_insert == null)
                    {
                        jQuery('.loader').show();
                        $('#example_ifr').css('width', '100%');
                        $('.RightSidePanel').remove();
                        $('#pstyleslist').remove();
                        $('#example_ifr').parent().append("<div id='pstyleslist' style='width:28%'></div> ");
                        
                        $("#pstyleslist").load($insert_reference, {
                            HOSTNAME: $HOSTNAME,
							DIFFERENCE: "references"
                        },				
                        function () { 		
                            jQuery('.loader').hide();
                        });
                    }
                    else
                    {
                        tinyMCE.activeEditor.windowManager.alert('Please clear the duplicate reference ... ');
                    }
                }
                });
				
			ed.addMenuItem('DeleteRef', {
                text: 'Delete Reference',
                image: base_url + '/assets/editor/img/delete.png',
                classes: 'DeleteRef',
                onclick: function () {
                    var verify_dupli_ref_del = tinyMCE.activeEditor.contentDocument.querySelector('div.references').querySelector('.DUPE-REF');
                    if(verify_dupli_ref_del == null)
                    {
                        ed.setProgressState(1);
                        var elementtxt = ed.dom.getParent(ed.selection.getNode(), 'p');
                        if (elementtxt == null)
                        {
                            tinymce.activeEditor.windowManager.alert("Please click once in reference then delete it!");
                            ed.setProgressState(0);
                        } else
                        {
                            var attrid = $(elementtxt).attr("id");
                            $content = "";
                            if (attrid == undefined || attrid == null || attrid == "undefined")
                            {
                                $content = "Do you want Delete this Reference?";
                            } else
                            {
                                $refid = attrid.replace("bib", "");
                                $content = "Do you want Delete Ref-" + $refid + "?";
                            }

                            // alert($content);

                            // Displays an confirm box and an alert message will be displayed depending on what you choose in the confirm
                            tinymce.activeEditor.windowManager.confirm($content, function (s)
                            {
                                if (s)
                                {
                                    debugger;
                                    var nextelement = $(elementtxt).nextAll();
                                    // var reference_Div_tag = tinyMCE.activeEditor.dom.getParent(elementtxt, 'div.references');
                                    if (attrid != undefined || attrid != null)
                                    {
                                        var get_Cite_SelectedElement = $(ed.contentDocument.body).find("a[href$='#"+attrid+"']");
                                        if (get_Cite_SelectedElement != 0)
                                        {
                                            for(var gcse = 0;gcse<get_Cite_SelectedElement.length;gcse++)
                                            {
                                                var get_Parent_Element = ed.dom.getParent(get_Cite_SelectedElement[gcse], 'span.REFLINKGRP');
												if(get_Parent_Element != null)
                                                {
                                                    let get_citation_element = get_Parent_Element.querySelectorAll('a');
                                                    if(get_citation_element.length > 1)
                                                    {
                                                        var cur_Cite_String = get_Cite_SelectedElement[gcse].outerHTML;
                                                        var reg = new RegExp(cur_Cite_String+"( *)?(,)?( *)?", "g");
                                                        var new_get_Parent_Element = get_Parent_Element.outerHTML.replace(reg, '');
                                                        get_Parent_Element.outerHTML = new_get_Parent_Element;
                                                    }
                                                    else{
                                                        get_Parent_Element.outerHTML = get_citation_element[0].innerHTML;
                                                    }
                                                }
                                                else
                                                {
                                                    get_Cite_SelectedElement[gcse].outerHTML = get_Cite_SelectedElement[gcse].innerHTML;
                                                }
                                            }
                                            elementtxt.remove();
                                        } else
                                        {
                                            elementtxt.remove();
                                        }
                                    } else
                                    {
                                        elementtxt.remove();
                                    }
                                    var delete_Track_Renumbering = [];
                                    for(var ne = 0; ne<nextelement.length; ne++)
                                    {
                                        delete_Track_Renumbering = renumber_ref(nextelement[ne], 'delete', delete_Track_Renumbering, 'bib');
                                    }
                                    $.ajax({
                                        'async': false,
                                        'type': "POST",
                                        'global': false,
                                        'dataType': 'html',
                                        'url': base_url + 'home/create_Log_for_Renumbering',
                                        data:{seq_Change_Start: delete_Track_Renumbering[0], seq_Change_End: delete_Track_Renumbering[delete_Track_Renumbering.length-1], insert_Delete_number: $refid, Difference:"Reference", operation:'Delete'},
                                        success: function (result) {
                                            
                                        }
                                    });
                                    tinymce.activeEditor.windowManager.alert("Ref-" + $refid + " is deleted.");
                                }

                            });
                            ed.setProgressState(0);
                        }
                    }
                    else
                    {
                        tinyMCE.activeEditor.windowManager.alert('Please clear the duplicate reference ... ');
                    }
                }
            });
			
			ed.addMenuItem('ref-unstyle', {
                text: 'Ref-unstyling',
                // image: base_url + '/assets/editor/img/delete.png',
                classes: 'ref-unstyle',
                onclick: function () {
                    var get_parent_tag = ed.dom.getParent(ed.selection.getNode(), 'p');
                    if (get_parent_tag == null)
                    {
                        tinymce.activeEditor.windowManager.alert("Please click once in reference then unstyle it!");
                    } 
                    else
                    {
                        var attrid = $(get_parent_tag).attr("id");
                        $content = "";
                        if (attrid == undefined || attrid == null || attrid == "undefined")
                        {
                            $content = "Do you want unstyle this Reference?";
                        } else
                        {
                            $refid = attrid.replace("bib", "");
                            $content = "Do you want unstyle Ref-" + $refid + "?";
                        }
                        tinymce.activeEditor.windowManager.confirm($content, function (s)
                        {
                            if (s)
                            {
                                debugger;
                                var get_unstruct_element = get_parent_tag.querySelector("span.UNSTRUCTREF");
                                if(get_parent_tag.querySelector("span.reflabel") != null)
                                {
                                    var get_tag_after_insert = get_parent_tag.querySelector("span.reflabel");
                                    
                                }
                                else if(get_parent_tag.querySelector("span.DOIREF") != null)
                                {
                                    var get_tag_after_insert = get_parent_tag.querySelector("span.DOIREF");
                                }
                                else
                                {
                                    var get_tag_after_insert = get_unstruct_element;
                                }
                                var next_elements = $(get_tag_after_insert).nextAll();
                                for(var ne = 0; ne < next_elements.length; ne++)
                                {
                                    next_elements[ne].remove();
                                }
                                get_tag_after_insert.insertAdjacentHTML("afterend", get_unstruct_element.innerHTML);
                            }
                        });
                    }
                }
            });
			
			ed.addMenuItem('footnote', {
                text: 'Footnote',
                // image: base_url + '/assets/editor/img/delete.png',
                classes: 'footnote',
                menu: [
                        {text: 'Insert Footnote', onclick: function(){insertFootNote()}},
                        {text: 'Delete Footnote', onclick: function(){deleteFootNote()}}
                ]
                
                });
			
            ed.addMenuItem('acceptchange', {
                text: 'Accept Change',
                image: base_url + '/assets/editor/tinymce4/js/tinymce/plugins/ice/img/accept.gif',
                //onPostRender: postRenderCell,
                classes: 'acceptchange',
                onclick: function () {
                    $('.mce-accepttrack').trigger('click');
                }
            });
            ed.addMenuItem('rejectchange', {
                text: 'Reject Change',
                image: base_url + '/assets/editor/tinymce4/js/tinymce/plugins/ice/img/reject.gif',
                //onPostRender: postRenderCell,
                classes: 'rejectchange',
                onclick: function () {
                    $('.mce-rejecttrack').trigger('click');
                    /*~~~~~~~~~~~~~ start rejection ce automation ~~~~~~~~~~ */
                    var ed = tinyMCE.get('example');
                    var tag1 = ed.dom.getParent(ed.selection.getNode(), '.JXPRESS_ME,.JXPRESS_LE');
                    var tag2 = ed.dom.getParent(ed.selection.getNode(), ".OPSPACE");
                    var remove_tag;
                    if (tag1 !== null && tag2 === null) {
                        remove_tag = ed.dom.getParent(ed.selection.getNode(), '.JXPRESS_ME,.JXPRESS_LE');
                        // var rep_txt = $(remove_tag).find(".CREPL").text();
                        // var con = confirm("Are sure to remove this replaced text \" " + rep_txt + " \" ?");
                        // if (con) {
                            $(remove_tag).find(".CREPL").remove();
                            $(remove_tag).find(".CFIND").contents().unwrap();
                            $(remove_tag).contents().unwrap();
							tag1.remove();
                        // }
                    } else if (tag2 !== null && tag1 === null) {
                        remove_tag = ed.dom.getParent(ed.selection.getNode(), ".OPSPACE");
                        var con = confirm("Are sure to remove this space?");
                        if (con) {
                            $(remove_tag).remove();
                        }
                    }
                    /*~~~~~~~~~~~~~ end rejection ce automation ~~~~~~~~~~ */
                    
                    
                }
            });
			/*~~~~~~~~~~~~ re-run reference ~~~~~~~~~~~~~~~~~ */
			ed.addMenuItem('rerun', {
                text: 'Re-run this reference',
                image: base_url + '/assets/editor/tinymce4/js/tinymce/plugins/ice/img/reload-icon.png',
                classes: 'rerun',
                onclick: function () {
                    var node = ed.selection.getNode();
                    var id = $(node).parent().attr("id");
                    var data_cite = $(node).parent().attr("data-cite");
                    var datacls = $(node).parent().attr("class");
                    var newcontent = "";
                    newcontent = $(node).parent().html();
                    var confm = confirm("Are you sure to Re-Run this reference?");
                    if (confm) {
						 jQuery('.loader').show();
                        $.ajax({
                            'type': "POST",
                            'dataType': 'html',
                            'url': base_url + 'home/writeref',
                            data: {id: id, data_cite: data_cite, datacls: datacls, content: newcontent},
                            success: function (response) {
                                var info = jQuery.parseJSON(response);
                                if (info.status == "success") {
                                    $.ajax({
                                        'type': "POST",
                                        'dataType': 'html',
                                        'url': base_url + 'home/execute_rerun',
                                        data: {},
                                        success: function (responsein) {
                                            var infoin = jQuery.parseJSON(responsein);
                                            if (infoin.status == "success") {
                                                var mod_content = $(infoin.message).html();
                                                var element = ed.dom.getParent(ed.selection.getNode(), 'p');
                                                element.innerHTML = mod_content;
												
												// jQuery('.loader').hide();
                                            }
											else{
												alert("Something went wrong. Please contact support team!!!");
											}
											jQuery('.loader').hide();
                                        }
                                    });
                                } else {
                                    alert(info.message);
                                }
                            }
                        });
						
						 
                    }
                }
            });
			
			
			ed.addMenuItem('removegrantdisclosure', {
                text: 'Delete Grant Disclosure',
                image: base_url+'/assets/editor/img/delete.png',
                classes: 'removegrantdisclosure',
                onclick: function () {
                    /*~~~~~~~~~~~~~Start Reject Grant Disclosure  ~~~~~~~*/
                    var gd1 = ed.dom.getParent(ed.selection.getNode(), 'div');
                    var gd2 = ed.dom.getParent(ed.selection.getNode(), 'div');
                    var con = confirm("This \"Grant Disclousure\" should be \"no funding\". Because of, you never get back this content once you deleted. So make sure before you delete.\nAre you sure to Delete?");
                    if (con) {
                        //$(remove_tag).parent().find('.FUNDERDIV').remove();
                        $(gd1).remove();
                        $(gd2).remove();
                    }
                    /*~~~~~~~~~~~~~End Reject Grant Disclosure  ~~~~~~~*/

                }
            });
			
			
			
            ed.addMenuItem('thesaurus',
                    {
                        text: 'Thesaurus',
                        context: 'table',
                        icon: 'mce-ico mce-i-spellchecker',
                        onclick: function (e)
                        {
                            var word1 = tinymce.activeEditor.selection.getContent();
                            tinyMCE.activeEditor.windowManager.open(
                                    {
                                        width: 250,
                                        height: 300,
                                        title: "Thesaurus",
                                        body: [
                                            {
                                                type: 'container',
                                                html: '<ol style="height:300px;margin-left:45px;" id="list_thesaurus"></ol>'
                                            }],
                                        onOpen: function (ed)
                                        {
                                            $('#list_thesaurus').parent().parent().css('overflow-y', 'scroll');
                                            $.ajax({
                                                url: " http://words.bighugelabs.com/api/2/799aea7ec21d9ecb5e2e453b61dd9d05/" + word1 + "/json?callback=?",
                                                type: "GET",
                                                dataType: "json",
                                            }).done(function (data) {
                                                // console.log(data);
                                                var array = $.map(data, function (value, index) {
                                                    return [value];
                                                });
                                                // console.log(array);
                                                //console.log(array[0]);
                                                var array_noun = $.map(array[0], function (value, index)
                                                {
                                                    return [value];
                                                });
                                                //console.log(array_noun[0]);
                                                var nameList;
                                                for (var i = 0; i < array_noun[0].length; i++)
                                                {
                                                    nameList = "<li style='font-size:20px;'>" + array_noun[0][i] + "</li>";
                                                    document.getElementById("list_thesaurus").innerHTML += nameList;
                                                }
                                            });
                                        }
                                    });

                        }
                    });


            ed.addMenuItem('close', {
                text: 'Close',
                context: 'file',
                onclick: function () {
                    //ed.checkProcess();
                    window.close();
                }
            });

            ed.addMenuItem('Export', {
                text: 'Export as Docx',
                context: 'exportmenu',
                onclick: function () {
                    var path = window.location.href;
                    var parts = path.split("/");
                    var file_id = parts[parts.length - 2];
                    var file_name = parts[parts.length - 1];
                    var whole_content = ed.getContent();
                    //console.log(whole_content);
                    var file_path_to_export_as_docx = $('#file_path_to_export_as_docx').val();
                    var con = document.createElement('html');
                    con.innerHTML = whole_content;
                    //console.log(con);
                    var formulas = con.getElementsByTagName('alternatives');

                    var math_array = tinymce.toArray(formulas);//console.log(math_array);
                    var whole_math = '';
                    for (var m = 0; m < math_array.length; m++) {
                        var id = math_array[m].parentNode.getAttribute('id');
                        if (typeof math_array[m].getElementsByTagName('math')[0] != 'undefined') {
                            math_array[m].getElementsByTagName('math')[0].setAttribute('id', id);
                            var inner = math_array[m].getElementsByTagName('math')[0].outerHTML;
                            var innerout = inner.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;")

                            whole_math += math_array[m].getElementsByTagName('math')[0].outerHTML + '\n';



                            math_array[m].getElementsByTagName('math')[0].outerHTML = innerout;
                        }

                        if (typeof math_array[m].getElementsByTagName('tex-math')[0] != 'undefined') {
                            var innertex = math_array[m].getElementsByTagName('tex-math')[0].textContent;
                            math_array[m].getElementsByTagName('tex-math')[0].outerHTML = '';
                        }

                    }

                    var annotation = con.getElementsByTagName('span');
                    var node_annotation = tinymce.toArray(annotation);
                    var t = 1;
                    var final_comment = "<div style='mso-element:comment-list'>";
                    for (var s = 0; s < node_annotation.length; s++) {
                        if ($(node_annotation[s]).attr('data-annotation')) {

                            var comment = $(node_annotation[s]).attr('data-annotation');
                            var out_html = "<a style='mso-comment-reference:i_" + t + ";'>" + node_annotation[s].innerHTML + " </a><span class='MsoCommentReference'><![if !supportAnnotations]><a class='msocomanchor' id='_anchor_" + t + "' onmouseover='msoCommentShow('_anchor_" + t + "','_com_" + t + "')' onmouseout='msoCommentHide('_com_" + t + "')' href='#_msocom_" + t + "' language='JavaScript' name='_msoanchor_" + t + "'>[i" + t + "]</a><![endif]><span style='mso-special-character:comment'>&nbsp;</span></span>";
                            node_annotation[s].outerHTML = out_html;
                            final_comment += " <div style='mso-element:comment'><![if !supportAnnotations]><div id='_com_" + t + "' class='msocomtxt' language='JavaScript' onmouseover='msoCommentShow('_anchor_" + t + "','_com_" + t + "')' onmouseout='msoCommentHide('_com_" + t + "')'><![endif]><p class='MsoCommentText'><span class='MsoCommentReference'><span style='mso-special-character:comment'>&nbsp;<![if !supportAnnotations]><ahref='#_msoanchor_" + t + "' class=msocomoff>[i" + t + "]</a><![endif]></span></span>" + decodeURI(comment) + "</p><![if !supportAnnotations]></div><![endif]></div>";
                            t++;
                            //}
                        }
                    }
                    final_comment += '</div>';

                    con.innerHTML += final_comment;
                    //console.log(con.innerHTML);
                    $.ajax({
                        url: base_url + 'home/final_export',
                        type: 'POST',
                        data: {"text": con.innerHTML, "file_id": file_id, "whole_math": whole_math, "file_name": file_name, "file_path_to_export_as_docx": file_path_to_export_as_docx},

                        success: function (result) {
                            tinyMCE.activeEditor.windowManager.alert("Exported");
                        }
                    });

                }
            });
            ed.addMenuItem('ExportAsXML', {
                text: 'Export as XML',
                context: 'exportmenu',
                onclick: function () {
                    ed.setProgressState(1);
                    var path = window.location.href;
                    var parts = path.split("/");
                    var file_id = parts[parts.length - 2];
                    var file_name = parts[parts.length - 1];
                    var whole_content = ed.getContent();
                    var con = document.createElement('html');
                    con.innerHTML = whole_content;
                    var link = con.getElementsByTagName('link');
                    var link_array = tinymce.toArray(link);
                    for (var m = 0; m < link_array.length; m++) {
                        link_array[m].parentNode.removeChild(link_array[m]);

                    }
                    var vshapetype = con.getElementsByTagName('v:shapetype');
                    var vshapetype_array = tinymce.toArray(vshapetype);
                    for (var m = 0; m < vshapetype_array.length; m++) {
                        vshapetype_array[m].parentNode.removeChild(vshapetype_array[m]);

                    }
                    var vshape = con.getElementsByTagName('v:shape');
                    var vshape_array = tinymce.toArray(vshape);
                    for (var m = 0; m < vshape_array.length; m++) {
                        vshape_array[m].parentNode.removeChild(vshape_array[m]);

                    }
                    var vrect = con.getElementsByTagName('v:rect');
                    var vrect_array = tinymce.toArray(vrect);
                    for (var m = 0; m < vrect_array.length; m++) {
                        vrect_array[m].parentNode.removeChild(vrect_array[m]);

                    }
                    var op = con.getElementsByTagName('o:p');
                    var op_array = tinymce.toArray(op);
                    for (var m = 0; m < op_array.length; m++) {
                        op_array[m].parentNode.removeChild(op_array[m]);

                    }
                    var file_path_to_export_as_xml = $('#file_path_to_export_as_xml').val();
                    $.ajax({
                        url: base_url + 'home/final_export_as_xml',
                        type: 'POST',
                        data: {"text": con.innerHTML, "file_id": file_id, "file_name": file_name, "file_path_to_export_as_xml": file_path_to_export_as_xml},

                        success: function (result) {
                            ed.setProgressState(0);
                            if (result == 'success')
                                tinyMCE.activeEditor.windowManager.alert("Exported");
                            else if (result == 'error')
                                tinyMCE.activeEditor.windowManager.alert("Fail To Export");
                            else
                                tinyMCE.activeEditor.windowManager.alert(result);
                        }
                    });

                }
            });



            ed.addButton('Companylogo', {
                text: '',
                tooltip: "Integra",
                classes: "companylogo",
                onclick: function () {
                    window.location.href = 'http://www.Integra.in/';
                }

            });

			ed.addButton('RerunFM', {
                text: 'Rerun FM',
                tooltip: "ReRunFM",
                classes: "ReRunFM",
                onclick: function ()
                {
                    
					$sno = "222";
                           

                                var ed = tinyMCE.activeEditor;
                                //ed.setProgressState(1); // Show progress
								jQuery('.loader').show();
                                $.ajax({
                                    //'async': false,
                                    'type': "POST",
                                    'global': false,
                                    'dataType': 'html',
                                    'url': base_url + 'home/PE_STEPS',
                                    data: {sno: $sno},
                                    'success': function (data)
                                    {

                                        $rs = data;

                                        if ($rs.startsWith("Error"))
                                        {


                                            tinyMCE.activeEditor.windowManager.alert($rs);
                                            //ed.setProgressState(0); // Hide progress
											jQuery('.loader').hide();	

                                        } else
                                        {
                                            var content = ed.getContent();
                                            ed.setContent($rs);
                                            //refreshParastyleFunction();

                                           // ed.setProgressState(0);
											jQuery('.loader').hide();	

                                            if ($sno == 222)
                                            {

                                                tinyMCE.activeEditor.windowManager.alert("ReRun FM Completed");
                                            }



                                        }



                                    }
                                });
					
					
                }

            });
			ed.addButton('RevertFM', {
                text: 'Revert FM',
                tooltip: "Revert FM",
                classes: "Revert FM",
                onclick: function ()
                {
							$sno = "201";
                           

                                var ed = tinyMCE.activeEditor;
                                ed.setProgressState(1); // Show progress
                                $.ajax({
                                    'async': false,
                                    'type': "POST",
                                    'global': false,
                                    'dataType': 'html',
                                    'url': base_url + 'home/PE_STEPS',
                                    data: {sno: $sno},
                                    'success': function (data)
                                    {

                                        $rs = data;

                                        if ($rs.startsWith("Error"))
                                        {


                                            tinyMCE.activeEditor.windowManager.alert($rs);
                                            ed.setProgressState(0); // Hide progress

                                        } else
                                        {
                                            var content = ed.getContent();
                                            ed.setContent($rs);
                                            //refreshParastyleFunction();

                                            ed.setProgressState(0);

                                            if ($sno == 201)
                                            {

                                                tinyMCE.activeEditor.windowManager.alert("Revert FM Completed");
                                            }



                                        }



                                    }
                                });
                            					
                }

            });
			
			
			
            ed.addButton('BackButton', {
                text: 'Complete',
                tooltip: "Complete a File",
                classes: "BackButton",
                onclick: function ()
                {
                    // alert("dddd");
                    /* $fn = window.location.pathname;
                     $fn = $fn.replace(/(.*)(\/)(.*?)/g,'$3');
                     window.location.href=base_url+'/home/resetfilestatus/'+$fn; */

                    // XMLCreation("manual");

                    /* var ed = tinyMCE.activeEditor;
                     ed.setProgressState(1); // Show progress
                     setTimeout(function()
                     {
                     $.ajax({
                     'async': false,
                     'type': "POST",
                     'global': false,
                     'dataType': 'html',
                     'url': base_url+'home/XMLCreation',
                     'success': function (data) 
                     {
                     $rs = data;
                     if($rs.startsWith("Error"))
                     {
                     tinyMCE.activeEditor.windowManager.alert($rs);
                     ed.setProgressState(0); // Hide progress
                     }
                     else
                     {
                     $.ajax({
                     'async': false,
                     'type': "POST",
                     'global': false,
                     'dataType': 'html',
                     'url': base_url+'home/XMLVALIDATE',
                     'success': function (data) 
                     {
                     ed.setProgressState(0); // Hide progress
                     // tinyMCE.activeEditor.windowManager.alert(data);
                     }
                     });
                     }
                     }
                     });
                     }, 100); */

                    /* 
                     $fn = window.location.pathname;
                     $fn = $fn.replace(/(.*)(\/)(.*?)/g,'$3');
                     window.location.href=base_url+'/home/resetfilestatus/'+$fn;
                     */
                }

            });

            //scrolls to the respective reference on click
            ed.addButton('GotoReference', {
                text: 'GOTO Reference',
                tooltip: "GoTo Reference",
                classes: "GOTO",
                /* onclick: function() {
                 var editor = tinyMCE.get('example');
                 var ref = editor.dom.select("div");
                 $(ref).each(function(count){
                 $divscroll = $(this).attr("class");
                 if($divscroll === "references"){
                 $(this)[0].scrollIntoView();
                 }
                 
                 });
                 } */
                onclick: function () {

                    tinyMCE.activeEditor.windowManager.open({
                        title: "Go to Reference",
                        body: {type: 'textbox', name: 'file_name', id: 'file_name', label: 'Enter Refence Number', placeholder: 'Enter Refence Number'},
                        width: 520,
                        height: 100,
                        onClose: function () {
                            tinyMCE.activeEditor.focus();
                            ed.setProgressState(0); // Hide progress

                        },
                        buttons: [{
                                text: 'Goto',
                                subtype: 'primary',
                                onclick: function (e) {
                                    var number = $('#file_name').val();
                                    if (number == '') {
                                        alert('Reference number is required');
                                        return false;
                                    } else {

                                        var isnum = /^\d+$/.test(number);
                                        if (isnum)
                                        {
                                            var number = number - 1;

                                            if ($(tinymce.activeEditor.getBody()).find('.references p').length == 0)
                                            {
                                                alert("Reference not find please check it.");
                                            } else if ($(tinymce.activeEditor.getBody()).find('.references p').length < number || number < 0)
                                            {
                                                alert("Reference number not found please enter number 1 to " + $(tinymce.activeEditor.getBody()).find('.references p').length);
                                            } else if ($(tinymce.activeEditor.getBody()).find('.references p').length > number)
                                            {
                                                $(tinymce.activeEditor.getBody()).find('.references p').get(number).scrollIntoView();
                                                $('.mce-close').trigger('click');
                                            }

                                        } else
                                        {
                                            alert('Please Enter numbers only');
                                        }
                                    }

                                }
                            },
                            {
                                text: 'Close',
                                onclick: function () {
                                    $('.mce-close').trigger('click');
                                }
                            }],
                        onsubmit: function (e) {
                            // alert("Hello");
                            var number = $('#file_name').val();
                            if (number == '') {
                                alert('Reference number is required');
                                return false;
                            } else {

                                var isnum = /^\d+$/.test(number);
                                if (isnum)
                                {
                                    var number = number - 1;

                                    if ($(tinymce.activeEditor.getBody()).find('.references p').length == 0)
                                    {
                                        alert("Reference not find please check it.");
                                    } else if ($(tinymce.activeEditor.getBody()).find('.references p').length < number || number < 0)
                                    {
                                        alert("Reference number not found please enter number 1 to " + $(tinymce.activeEditor.getBody()).find('.references p').length);
                                    } else if ($(tinymce.activeEditor.getBody()).find('.references p').length > number)
                                    {
                                        $(tinymce.activeEditor.getBody()).find('.references p').get(number).scrollIntoView();
                                        $('.mce-close').trigger('click');
                                    }

                                } else
                                {
                                    alert('Please Enter numbers only');
                                }
                            }
                        }
                    });
                }
            });

            ed.addButton('Companylogo1', {
                text: '',
                tooltip: "Xpert",
                classes: "companylogo1",
                onclick: function () {
                    window.location.href = 'http://www.Integra.in/';
                }
            });
            //add para mark to each paragraph
            ed.addButton('Paragraph', {
                text: "\u00B6",
                tooltip: "Paragraph",
                classes: "Paragraph",
                onclick: function () {

                    ed.execCommand('mceVisualBlocks');

                }
            });
            //shows para style in the leftsideview
            ed.addButton('ParagraphStyles', {
                text: '\u03a0',
                tooltip: "Paragraph Styles",
                classes: "paragraphstyles",
                onclick: function () {
											
                    this.active(!this.active());
                    var state = this.active();

                    if (state) {

                        leftsideview = true;
                        var ed = tinyMCE.activeEditor.getBody();

                        var div_id = $('#example_ifr').parent().attr('id');
                        var iframe_h = $('#example_ifr').height();
                        var body_div = $('#' + div_id).height();
                        var prev_elem = $('#' + div_id).prev().height();
                        var prev_elem1 = $('#' + div_id).prev().prev().height();
                        var total_height = parseInt(prev_elem) + parseInt(prev_elem1) + parseInt(18);
                        $('#example_ifr').parent().addClass("padding-body");
                        $('#example_ifr').parent().prepend("<img style='width:25px;float: right;margin-top: " + total_height + "px;cursor:pointer;pointer-events:auto;position: fixed;top: 0px;left: 112px;-index: 1000;'  id='refreshParastyle' src='" + base_url + "assets/editor/img/refresh1.png'/><div class='contentTypeWrapper'><div class='contentHeadWrapper' style='position:relative;'></div></div>");

                        if (rightsideview)
                        {
                            if (crfstylesdiv)
                            {
                                $('#example_ifr').css('width', '53.5%');
                                $('#example_ifr').css('margin-left', '10%');
                                $('#example_ifr').css('padding-left', '5px');

                            } else
                            {
                                $('#example_ifr').css('width', '60%');
                                $('#example_ifr').css('margin-left', '10%');
                                $('#example_ifr').css('padding-left', '5px');
                            }
                        }
                        $('.contentTypeWrapper').css('top', total_height + 'px');
                        $('.contentTypeWrapper').css('height', iframe_h);
						if($(".mce-AceEditor").hasClass("mce-active")==true){
								$('#example_ifr').css('width', '50%');
								$(".RightSidePanel").css('width','39%');
						}
						else
						{
							$('#example_ifr').css('width', '100%');
						}
                        document.getElementById("refreshParastyle").addEventListener("click", myFunction, false);

                        function myFunction() {
                            $('.contentHeadWrapper').html('');
                            $('#refreshParastyle').show();
                            var myStringArray = getNodeList(tinyMCE.activeEditor.getBody());
                            //console.log(myStringArray);
                            $('.contentHeadWrapper').html(myStringArray);
                            var scroll = tinymce.DOM.getViewPort(tinymce.activeEditor.getWin()).y;
                            $(".contentTypeWrapper").scrollTop(scroll);
							
                            //$('.contentHeadWrapper').css('zoom', $('.mce-zoomselect').find('.mce-txt').text());//removed zoom

                            function getNodeList(elem) {
                                var l = new Array(elem), c = 1, ret = new Array(), para = '';
                                for (var r = 0; r < c; r++) {
                                    for (var z = 0; z < l[r].childNodes.length; z++) {
										var paraguid="";
                                        if (l[r].childNodes[z].nodeName == 'P' || l[r].childNodes[z].nodeName == 'DIV' || l[r].childNodes[z].nodeName == 'H1' || l[r].childNodes[z].nodeName == 'H2' || l[r].childNodes[z].nodeName == 'H3' || l[r].childNodes[z].nodeName == 'H4' || l[r].childNodes[z].nodeName == 'H5' || l[r].childNodes[z].nodeName == 'H6' || l[r].childNodes[z].nodeName == 'OL' || l[r].childNodes[z].nodeName == 'UL') {
                                            if (l[r].childNodes[z].parentElement.nodeName != 'TD') {
                                                ret.push(l[r].childNodes[z]);
                                                if (l[r].childNodes[z].nodeName != 'DIV') {
                                                    /* alert(l[r].childNodes[z].className);
                                                     alert(l[r].childNodes[z].offsetTop); */
													if(l[r].childNodes[z].getAttribute('data-standard')!=null)
													{
														paraguid =" | "+l[r].childNodes[z].getAttribute('data-standard');
													}
                                                    if (l[r].childNodes[z].nodeName == "OL" || l[r].childNodes[z].nodeName == "UL")
                                                    {
                                                        para += "<p style='position:absolute;top:" + l[r].childNodes[z].offsetTop + "px'>" + l[r].childNodes[z].className + " List "+paraguid+"</p>";
                                                    } else
                                                    {
                                                        para += "<p style='position:absolute;top:" + l[r].childNodes[z].offsetTop + "px'>" + l[r].childNodes[z].className + ""+paraguid+"</p>";
                                                    }
                                                } else {
                                                    //console.log(l[r].childNodes[z]);
                                                    if (l[r].childNodes[z].className == "body")
                                                    {

                                                    } else if (l[r].childNodes[z].className == "front")
                                                    {

                                                        var o_t = l[r].childNodes[z].offsetTop - 15;
                                                        var h_t = parseInt(l[r].childNodes[z].offsetTop) + parseInt(l[r].childNodes[z].clientHeight) - 15;
                                                        para += "<p style='position:absolute;top:" + o_t + "px;font-weight:bold;color:green;'>" + l[r].childNodes[z].className + "</p>";
                                                        // para+="<p style='position:absolute;top:"+h_t+"px;font-weight:bold;color:green;'>"+l[r].childNodes[z].className+" End</p>";

                                                    } else if (l[r].childNodes[z].className == "back")
                                                    {
                                                        var o_t = l[r].childNodes[z].offsetTop - 15;
                                                        var h_t = parseInt(l[r].childNodes[z].offsetTop) + parseInt(l[r].childNodes[z].clientHeight) - 20;
                                                        para += "<p style='position:absolute;top:" + o_t + "px;font-weight:bold;color:green;'>" + l[r].childNodes[z].className + "</p>";
                                                        // para+="<p style='position:absolute;top:"+h_t+"px;font-weight:bold;color:green;'>"+l[r].childNodes[z].className+" End</p>";

                                                    } else
                                                    {
                                                        var o_t = l[r].childNodes[z].offsetTop - 15;
                                                        var h_t = parseInt(l[r].childNodes[z].offsetTop) + parseInt(l[r].childNodes[z].clientHeight) - 30;
                                                        para += "<p style='position:absolute;top:" + o_t + "px;font-weight:bold;color:green;'>" + l[r].childNodes[z].className + "</p>";
                                                        // para+="<p style='position:absolute;top:"+h_t+"px;font-weight:bold;color:green;'>"+l[r].childNodes[z].className+" End</p>";

                                                    }


                                                }
                                            }
                                        }
                                        if (l[r].childNodes[z].childNodes[0]) {

                                            l.push(l[r].childNodes[z]);
                                            c++;

                                        }

                                        //}      
                                    }
                                }
                                para += "<p name='last' style='position:absolute;top:" + tinyMCE.activeEditor.getBody().clientHeight + "px'>______________</p>";
                                return para;

                            }
                        }
                        var myStringArray = getNodeList(tinyMCE.activeEditor.getBody());

                        $('.contentHeadWrapper').html(myStringArray);
                        var scroll = tinymce.DOM.getViewPort(tinymce.activeEditor.getWin()).y;
                        $(".contentTypeWrapper").scrollTop(scroll);

                        $('.contentTypeWrapper').css('height', iframe_h);

                        //$('.contentHeadWrapper').css('zoom', tinyMCE.activeEditor.getBody().style.zoom);//removed zoom
                        function getNodeList(elem) {
                            var l = new Array(elem), c = 1, ret = new Array(), para = '';
                            for (var r = 0; r < c; r++) {
                                for (var z = 0; z < l[r].childNodes.length; z++) {
									var paraguid="";
                                    if (l[r].childNodes[z].nodeName == 'P' || l[r].childNodes[z].nodeName == 'DIV' || l[r].childNodes[z].nodeName == 'H1' || l[r].childNodes[z].nodeName == 'H2' || l[r].childNodes[z].nodeName == 'H3' || l[r].childNodes[z].nodeName == 'H4' || l[r].childNodes[z].nodeName == 'H5' || l[r].childNodes[z].nodeName == 'H6' || l[r].childNodes[z].nodeName == 'OL' || l[r].childNodes[z].nodeName == 'UL') {
                                        if (l[r].childNodes[z].parentElement.nodeName != 'TD') {
                                            ret.push(l[r].childNodes[z]);
                                            if (l[r].childNodes[z].nodeName != 'DIV') {
												if(l[r].childNodes[z].getAttribute('data-standard')!=null)
												{
													paraguid =" | "+l[r].childNodes[z].getAttribute('data-standard');
												}
                                                if (l[r].childNodes[z].nodeName == "OL" || l[r].childNodes[z].nodeName == "UL")
                                                {
                                                    para += "<p style='position:absolute;top:" + l[r].childNodes[z].offsetTop + "px'>" + l[r].childNodes[z].className + " List "+paraguid+"</p>";
                                                } else
                                                {
                                                    para += "<p style='position:absolute;top:" + l[r].childNodes[z].offsetTop + "px'>" + l[r].childNodes[z].className + ""+paraguid+"</p>";
                                                }
                                            } else {
                                                if (l[r].childNodes[z].className == "body")
                                                {

                                                } else if (l[r].childNodes[z].className == "front")
                                                {
                                                    var o_t = l[r].childNodes[z].offsetTop - 15;
                                                    var h_t = parseInt(l[r].childNodes[z].offsetTop) + parseInt(l[r].childNodes[z].clientHeight) - 15;
                                                    para += "<p style='position:absolute;top:" + o_t + "px;font-weight:bold;color:green;'>" + l[r].childNodes[z].className + "</p>";
                                                    // para+="<p style='position:absolute;top:"+h_t+"px;font-weight:bold;color:green;'>"+l[r].childNodes[z].className+" End</p>";

                                                } else if (l[r].childNodes[z].className == "back")
                                                {
                                                    var o_t = l[r].childNodes[z].offsetTop - 15;
                                                    var h_t = parseInt(l[r].childNodes[z].offsetTop) + parseInt(l[r].childNodes[z].clientHeight) - 15;
                                                    para += "<p style='position:absolute;top:" + o_t + "px;font-weight:bold;color:green;'>" + l[r].childNodes[z].className + "</p>";
                                                    // para+="<p style='position:absolute;top:"+h_t+"px;font-weight:bold;color:green;'>"+l[r].childNodes[z].className+" End</p>";

                                                } else
                                                {
                                                    var o_t = l[r].childNodes[z].offsetTop - 15;
                                                    var h_t = parseInt(l[r].childNodes[z].offsetTop) + parseInt(l[r].childNodes[z].clientHeight) - 30;
                                                    para += "<p style='position:absolute;top:" + o_t + "px;font-weight:bold;color:green;'>" + l[r].childNodes[z].className + "</p>";
                                                    // para+="<p style='position:absolute;top:"+h_t+"px;font-weight:bold;color:green;'>"+l[r].childNodes[z].className+" End</p>";

                                                }

                                            }
                                        }
                                    }
                                    if (l[r].childNodes[z].childNodes[0]) {

                                        l.push(l[r].childNodes[z]);
                                        c++;

                                    }

                                    //}      
                                }
                            }
                            para += "<p name='last' style='position:absolute;top:" + tinyMCE.activeEditor.getBody().clientHeight + "px'>______________</p>";
                            return para;
                            //console.log(para);
                        }
                        //$('.contentHeadWrapper').css('zoom', $('.mce-zoomselect').find('.mce-txt').text());//removed zoom
                    } else {


                        leftsideview = false;
                        if (crfstylesdiv)
                        {
                            $('#example_ifr').css('width', '59%');
                            $('#example_ifr').css('margin-left', '0%');
                            $('#example_ifr').css('padding-left', '5px');
                        } else if (rightsideview)
                        {
                            $('#example_ifr').css('width', '70%');
                            $('#example_ifr').css('margin-left', '0%');
                            $('#example_ifr').css('padding-left', '0px');
                        }
						if($(".mce-AceEditor").hasClass("mce-active")==true){
							$('#example_ifr').css('width', '50%');
							$(".RightSidePanel").css('width','49%');
						}
						else
						{
							$('#example_ifr').css('width', '100%');
						}
                        $('.contentTypeWrapper').parent().removeClass("padding-body");
                        $('.contentTypeWrapper').remove();
                        $('#refreshParastyle').hide();

                    }

					//$('#refreshParastyle').trigger('click');
					//$('#example_ifr').css('width', '100%');
					calculatingView();
                }                
            });



            ed.on('init', function ()
            {
                var file_id = $('#exist_file_id').val();
                $.ajax({
                    type: 'POST',
                    url: base_url + 'home/checkProject',
                    data: {file_id: file_id},
                    success: function (result) {
                        if (result.trim() == '')
                            $('.mce-selectproject').trigger('click');
                    }
                });
                ed.getBody().style.zoom = '150%';
                p_tags = tinymce.toArray(ed.getBody().getElementsByTagName('P')).length;
                $('.mce-i-removeformat1').parent().parent().css('width', '0px');
                $('.mce-i-removeformat2').parent().parent().css('width', '0px');
                var table_nodes = tinymce.toArray(ed.getBody().getElementsByTagName('TABLE'));
                if (table_nodes.length > 0) {

                    for (var t = 0; t < table_nodes.length; t++) {

                        table_nodes[t].style.width = '100%';
                        table_nodes[t].style.margin = '0px';
                    }

                }
                var scriptLoader = new tinymce.dom.ScriptLoader();

                scriptLoader.add(base_url + "assets/editor/ice/tinymce4_plugin/auto-complete.js");
                scriptLoader.add(base_url + "assets/editor/ice/tinymce4_plugin/protip.min.js");

                scriptLoader.loadQueue();

                this.getDoc().body.style.fontSize = '14px';
                this.getDoc().body.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';


                $(ed.getWin()).bind('mousewheel', function (e) {

                    if (e.ctrlKey) {
                        e.preventDefault();
                        if (e.originalEvent.wheelDelta < 0) {
                            $('.mce-zoomout').trigger('click');
                        } else {
                            $('.mce-zoomin').trigger('click');
                        }
                        return false;
                    }

                });
                 // Load Context menu from DB - sankar 
                ed.on('contextmenu', function (e) {
                    
                    e.preventDefault();
                    e.stopPropagation();
                    var ed = tinyMCE.get('example');
                    var element = ed.selection.getNode();

                    var elmnt_nodename = element.nodeName;
                    var elmnt_classname = element.className;
                    var elmnt_class_array = '';
                    
                    if (elmnt_classname) {
                        elmnt_class_array = elmnt_classname.split(" ");
                    }
                    
                    if (contextmnu_jsonData.length > 0) {
                        $('.mce-contextmenu .mce-container-body').find("div[role=separator]").show();
                        
                        for (var i = 0; i < contextmnu_jsonData.length; i++) {
                            $('.' + contextmnu_jsonData[i].context_class_name).show();
                            var isShowitem = '0';
                                                        
                            // hidden ignore node name - start
                            if (contextmnu_jsonData[i].ignore_node_name != 'null') {
                                var ignore_node_name = contextmnu_jsonData[i].ignore_node_name.toLowerCase().split('|');
                                if (ignore_node_name.length) {
                                    if (ignore_node_name.indexOf(elmnt_nodename.toLowerCase()) > -1) {
                                        $('.' + contextmnu_jsonData[i].context_class_name).hide();
                                        isShowitem = '1'
                                    }
                                }
                            }
                            // hidden ignore node name - end

                            // hidden ignore node style - start
                            if (contextmnu_jsonData[i].ignore_node_style != 'null' && elmnt_classname != '') {
                                var ignore_node_style = contextmnu_jsonData[i].ignore_node_style.toLowerCase().split('|');
                                if (ignore_node_style.length) {
                                    if (elmnt_class_array.length) {
                                        for (j = 0; j < ignore_node_style.length; j++) {
                                            for (k = 0; k < elmnt_class_array.length; k++) {
                                                if (ignore_node_style[j].toLowerCase() == elmnt_class_array[k].toLowerCase()) {
                                                    $('.' + contextmnu_jsonData[i].context_class_name).hide();
                                                    isShowitem = '1'
                                                }
                                            }
                                        }
                                    }

                                }
                            }
                            // hidden ignore node style - end

                            // hidden ignore parent tag style - start
                            if (contextmnu_jsonData[i].ignore_parent_style != 'null') {
                                var ignore_parent_style = '.' + contextmnu_jsonData[i].ignore_parent_style.replace(/\|/g, ',.');
                                if ($(ed.dom.getParents(ed.selection.getNode(), ignore_parent_style)).length > 0) {
                                    $('.' + contextmnu_jsonData[i].context_class_name).hide();
                                    isShowitem = '1'
                                }
                            }
                            // hidden ignore parent tag style - end

                            // Check matched node name - start
                            if (contextmnu_jsonData[i].node_name != 'null' && isShowitem =='0') {
                                var node_name = contextmnu_jsonData[i].node_name.toLowerCase().split('|');
                                if (node_name.length) {
                                    if (node_name.indexOf(elmnt_nodename.toLowerCase()) < 0) {
                                        $('.' + contextmnu_jsonData[i].context_class_name).hide();
                                    }
                                    else if (node_name.indexOf(elmnt_nodename.toLowerCase()) >= 0) {
                                        $('.' + contextmnu_jsonData[i].context_class_name).show();
                                        isShowitem = '1';
                                    }
                                }
                            }
                            // Check matched node name - end

                            // Check matched node style - start
                            if (contextmnu_jsonData[i].node_style != 'null' && isShowitem == '0') {
                                var node_style = contextmnu_jsonData[i].node_style.toLowerCase().split('|');
                                if (node_style.length) {
                                    if (elmnt_class_array.length) {
                                        var isFound = '0';
                                        for (j = 0; j < node_style.length; j++) {
                                            for (k = 0; k < elmnt_class_array.length; k++) {
                                                if (node_style[j].toLowerCase() == elmnt_class_array[k].toLowerCase()) {
                                                    isFound = '1';
                                                    isShowitem = '1';
                                                    $('.' + contextmnu_jsonData[i].context_class_name).show();
                                                }
                                            }
                                        }
                                        if (isFound == '0' && isShowitem == '0') {
                                            $('.' + contextmnu_jsonData[i].context_class_name).hide();
                                        }
                                    }
                                }
                            }
                            // Check matched node style - end

                            // check parent tag name - start
                            if (contextmnu_jsonData[i].parent_name != 'null' && isShowitem == '0') {
                                var parent_name = contextmnu_jsonData[i].parent_name.replace(/\|/g, ',');
                                if ($(ed.dom.getParents(ed.selection.getNode(), parent_name)).length <= 0) {
                                    $('.' + contextmnu_jsonData[i].context_class_name).hide();
                                }
                                else if ($(ed.dom.getParents(ed.selection.getNode(), parent_name)).length > 0) {
                                    $('.' + contextmnu_jsonData[i].context_class_name).show();
                                    isShowitem = '1'
                                }
                            }
                            // check parent tag name - end 

                            // check parent tag style - start
                            if (contextmnu_jsonData[i].parent_style != 'null' && isShowitem == '0') {
                                var parent_style = '.' + contextmnu_jsonData[i].parent_style.replace(/\|/g, ',.');
                                if ($(ed.dom.getParents(ed.selection.getNode(), parent_style)).length <= 0) {
                                    $('.' + contextmnu_jsonData[i].context_class_name).hide();
                                }
                                else if ($(ed.dom.getParents(ed.selection.getNode(), parent_style)).length > 0) {
                                    $('.' + contextmnu_jsonData[i].context_class_name).show();
                                    isShowitem = '1'
                                }
                            }
                            // check parent tag style - end 

                        }

                        // Check if user content select or not - start
                        if (ed.selection.getContent()) {                            
                            $("div[role=menuitem] i.mce-i-cut").parent().removeClass('mce-disabled');                            
                            $("div[role=menuitem] i.mce-i-copy").parent().removeClass('mce-disabled');                            
                            $(".mce-Insertcustomlink[role=menuitem]").show();                            
                        }
                        else {
                            $("div[role=menuitem] i.mce-i-cut").parent().addClass('mce-disabled');
                            $("div[role=menuitem] i.mce-i-copy").parent().addClass('mce-disabled');
                            $(".mce-Insertcustomlink[role=menuitem]").hide();
                        }
                        // Check if user content select or not - end

                        var isSeptag = false;
                        $('.mce-contextmenu .mce-container-body').find("div[role=menuitem],div[role=separator]").each(function () {
                            if ($(this).attr('role') == 'menuitem') {
                                if ($(this).is(":visible")) {
                                    isSeptag = false;
                                }
                            }
                            else if ($(this).attr('role') == 'separator') {
                                if (isSeptag == true) {
                                    $(this).hide();
                                }
                                isSeptag = true;
                            }

                        });
                    }

                });

                /*
                ed.on('contextmenu', function (e) {
								
                    e.preventDefault();
                    e.stopPropagation();
                    var ed = tinyMCE.get('example');
                    var element = ed.selection.getNode();

                    var k = element.nodeName;
                    var j = element.parentNode.nodeName;
                    var c = element.className;

                    var refelement = ed.dom.getParent(ed.selection.getNode(), 'div');
                    $divclass = refelement.className;
					
					//added by sathish (front,body,figure) - start	
					var getDiv="";				
					var element = ed.selection.getNode();
					b = element.parentNode;
					if(k!='IMG')
					{
						while (b)
						{
							if (b.nodeName == 'DIV')
							{
								if(b.className=='front' || b.className=='bodymatter')
								{
									getDiv = b.className;
									break;
								}
								else
								{
									b = b.parentNode;
								}
								
							} else
							{
								b = b.parentNode;
							}
						}
					}
					var getTag=getDiv;					
					if(getTag =='front')
					{
						//$('.mce-Fronthtml,.mce-Bodyhtml').show();						
						$('.mce-insertcomment,.mce-Authorgroup,.mce-Affiliation,.mce-Keywords').show();
						$('.mce-googlesearch,.mce-deletefigure,.mce-deleteequation,.mce-Thesaurus,.mce-Applystyles,.mce-Insertcustomlink,.mce-Convert,.mce-table,.mce-selectall,.mce-CreateXmlJson').hide();						
					}
					else if(getTag =='bodymatter')
					{
						$('.mce-insertcomment,.mce-table,.mce-Convert').show();
						$('.mce-googlesearch,.mce-deletefigure,.mce-deleteequation,.mce-Authorgroup,.mce-Affiliation,.mce-Keywords,.mce-Thesaurus,.mce-Applystyles,.mce-Insertcustomlink,.mce-selectall,.mce-CreateXmlJson').hide();
					}
					else if(k =='IMG')
					{
						$('.mce-insertcomment,.mce-rejectchange').show();
						$('.mce-googlesearch,.mce-deletefigure,.mce-deleteequation,.mce-Authorgroup,.mce-Affiliation,.mce-Keywords,.mce-Thesaurus,.mce-Applystyles,.mce-Insertcustomlink,.mce-Convert,.mce-table,.mce-selectall,.mce-CreateXmlJson').hide();
					}
					else
					{
						$('.mce-insertcomment,.mce-googlesearch,.mce-deletefigure,.mce-deleteequation,.mce-Authorgroup,.mce-Affiliation,.mce-Keywords,.mce-Thesaurus,.mce-Applystyles,.mce-Insertcustomlink').show();
					}		
					//added by sathish -start
					if($divclass == "TABLE")
					{
						
						$('.mce-AddFootnote').show();
						 
					}
					else
					{
						$('.mce-AddFootnote').hide();
					}
					//added by sathish -end
					//added by sathish (front,body,figure) -end

                    if (k == 'TD' || k == 'TR' || k == 'TABLE' || j == 'TD' || j == 'TR' || j == 'TABLE' || c == 'ephox-dragster-blocker') {
                        $('.mce-tableprops,.mce-Selectall,.mce-splittable,.mce-splitcell,.mce-insertrowandcolumn,.mce-autofitMenu,.mce-cellMenu,.mce-deleteMenu,.mce-rowMenu,.mce-columnMenu,.mce-Alignment').show();
                        $('.mce-tableprops').prev().show();
                    } else {
                        $('.mce-tableprops').prev().hide();
                        $('.mce-tableprops,.mce-Selectall,.mce-splittable,.mce-splitcell,.mce-insertrowandcolumn,.mce-autofitMenu,.mce-cellMenu,.mce-deleteMenu,.mce-rowMenu,.mce-columnMenu,.mce-Alignment').hide();
                    }
					
                    if (k == 'DEL' || k == 'INS') {
                        $('.mce-acceptchange,.mce-rejectchange').show();

                    } 
					else if(k == 'SPAN' && c == "QUERY")
					{
						$('.mce-deletequery').show();
						$('.mce-acceptchange,.mce-rejectchange,.mce-DeleteRef').hide();//.mce-deletefunderdiv
					}
					else if(k == 'SPAN' && c == "UNSTRUCTREF" || k == 'I')
					{
						$('.mce-RerunRef,.mce-rejectchange').show();
						$('.mce-acceptchange,.mce-deletequery').hide();//.mce-deletefunderdiv
					}
					
					/*
					else if($divclass == "FUNDERDIV")
					{
						
						$('.mce-deletefunderdiv').show();
						$('.mce-acceptchange,.mce-rejectchang,.mce-deletequery,.mce-DeleteRef').hide();
					}
					
					else if($divclass == "references")
					{
						$('.mce-acceptchange,.mce-rejectchange,.mce-deletequery').hide();//,.mce-deletefunderdiv
					}
					else if(tinyMCE.activeEditor.selection.getNode().parentNode.className=="DISP-EQUATION" || tinyMCE.activeEditor.selection.getNode().parentNode.className=="inline")
					{
						$('.mce-deleteequation').show();
					}
					else
					{
						$('.mce-acceptchange,.mce-rejectchange,.mce-deletequery,.mce-RerunRef,.mce-DeleteRef,.mce-deleteequation,.mce.deletefigure').hide();//,.mce-deletefunderdiv
					}
					
					if(tinyMCE.activeEditor.selection.dom.getParent(tinyMCE.activeEditor.selection.getNode(),'div.FIGBLOCK'))
					{
						$('.mce-deletefigure').show();
					}
                    else
                    {
                        $('.mce-deletefigure').hide();
                    }
                    if($divclass == "references")
                    {
                        $('.mce-DeleteRef,.mce-InsertRef,.mce-RerunRef,.mce-ref-unstyle,.mce-author-style,.mce-ins-author-grp').show();
                    }
                    else
                    {
                        $('.mce-DeleteRef,.mce-InsertRef,.mce-ref-unstyle,.mce-author-style,.mce-ins-author-grp').hide();
                    }
                    if($divclass == "footnote")
                    {
                        $('.mce-footnote').show()
                    }
                    else
                    {
                        $('.mce-footnote').hide()
                    }
                    if ((k === 'INS' && c === "OPSPACE") || (k === 'SPAN' && (c === "CREPL" || c === "CFIND"))) {
                        $('.mce-acceptchange,.mce-rejectchange').show();
                        $('.mce-deletequery,.mce-RerunRef').hide();
                    }
					
					// if ((c === "FUNDERPARA" || c === "DFUNDING")) {
					if ($divclass == "FUNDERDIV") {
                        $('.mce-removegrantdisclosure').show();
                        
                        $('.mce-acceptchange,.mce-deletequery,.mce-rejectchange,.mce-RerunRef').hide();
                    }else{
                         $('.mce-removegrantdisclosure').hide();
                    }
					
					 if (c == "UNSTRUCTREF") {
                        $('.mce-rerun').show();
                        $('.mce-acceptchange,.mce-deletequery,.mce-removegrantdisclosure').hide();
                    } else {
                        $('.mce-rerun').hide();
                    }

                });
            */


                ed.on('mousedown', function (evt) {
                });
                $(ed.getWin()).bind('scroll', function (e) {
                    var ele = $(e.currentTarget);
                    var top = ele.scrollTop();
                    $(".contentTypeWrapper").scrollTop(top);

                });


                ed.on('keydown', function (e) {

                    var evtobj = window.event ? event : e
                    // if(e.keycode === 84 && e.shiftkey){
                    // e.preventDefault();
                    // /* $('.mce-i-indent').trigger('click'); */
                    // alert("hello world");
                    // }	
					//added by sathish-start (Symbol related shortcut key)
					if (e.ctrlKey && e.altKey &&  e.keyCode === 76) { //Ctrl+ALT+L
						//debugger;
						//alert('Em Dash');
						var spchr="@2014;"
						window.parent.tinymce.activeEditor.execCommand('mceInsertContent', false, spchr.replace('@', '&#x'));
				   }
				   else if(e.ctrlKey && e.altKey &&  e.keyCode === 89)//Ctrl+ALT+Y
				   {
					    //debugger;
						//alert('En Dash');
						var spchr="@2013;"
						window.parent.tinymce.activeEditor.execCommand('mceInsertContent', false, spchr.replace('@', '&#x'));
				   }
				   else if(e.ctrlKey && e.altKey &&  e.keyCode === 84)//Ctrl+ALT+T
				   {
					    //debugger;
						//alert('Nonbreaking Hyphen');
						var spchr="@2011;"
						window.parent.tinymce.activeEditor.execCommand('mceInsertContent', false, spchr.replace('@', '&#x'));
				   }
				   else if(e.ctrlKey && e.altKey &&  e.keyCode === 85)//Ctrl+ALT+U
				   {
					    //debugger;
						//alert('Optional Hyphen');
						var spchr="@00AD;"
						window.parent.tinymce.activeEditor.execCommand('mceInsertContent', false, spchr.replace('@', '&#x'));
				   }
				   else if(e.ctrlKey && e.altKey &&  e.keyCode === 86)//Ctrl+ALT+V
				   {
					    //debugger;
						//alert('Thin Space');
						var spchr="@2009;"
						window.parent.tinymce.activeEditor.execCommand('mceInsertContent', false, spchr.replace('@', '&#x'));
				   }
				   else if(e.ctrlKey && e.altKey &&  e.keyCode === 87)//Ctrl+ALT+W
				   {
					    //debugger;
						//alert('Em Space');
						var spchr="@2003;"
						window.parent.tinymce.activeEditor.execCommand('mceInsertContent', false, spchr.replace('@', '&#x'));
				   }
				   else if(e.ctrlKey && e.altKey &&  e.keyCode === 88)//Ctrl+ALT+X
				   {
					    //debugger;
						//alert('	En Space');
						var spchr="@2002;"
						window.parent.tinymce.activeEditor.execCommand('mceInsertContent', false, spchr.replace('@', '&#x'));
				   }
				   else if(e.ctrlKey && e.altKey &&  e.keyCode === 90)//Ctrl+ALT+z
				   {
					    //debugger;
						//alert('Four-Per-Em Space');
						var spchr="@2005;"
						window.parent.tinymce.activeEditor.execCommand('mceInsertContent', false, spchr.replace('@', '&#x'));
				   }
				   else if(e.ctrlKey && e.altKey &&  e.keyCode === 70)//Ctrl+ALT+F
				   {
					    //debugger;
						//alert('Nonbreaking Space');
						var spchr="@00A0;"
						window.parent.tinymce.activeEditor.execCommand('mceInsertContent', false, spchr.replace('@', '&#x'));
				   }
				   else if(e.ctrlKey && e.altKey &&  e.keyCode === 68)//Ctrl+ALT+D
				   {
					    //debugger;
						//alert('Copyright');
						var spchr="@00A9;"
						window.parent.tinymce.activeEditor.execCommand('mceInsertContent', false, spchr.replace('@', '&#x'));
				   }
				   else if(e.ctrlKey && e.altKey &&  e.keyCode === 78)//Ctrl+ALT+N
				   {
					    //debugger;
						//alert('Registered');
						var spchr="@00AE;"
						window.parent.tinymce.activeEditor.execCommand('mceInsertContent', false, spchr.replace('@', '&#x'));
				   }
				   else if(e.ctrlKey && e.altKey &&  e.keyCode === 188)//Ctrl+ALT+','
				   {
					    //debugger;
						//alert('Trademark');
						var spchr="@2122;"
						window.parent.tinymce.activeEditor.execCommand('mceInsertContent', false, spchr.replace('@', '&#x'));
				   }
				   else if(e.ctrlKey && e.altKey &&  e.keyCode === 190)//Ctrl+ALT+'.'
				   {
					    //debugger;
						//alert('Section');
						var spchr="@00A7;"
						window.parent.tinymce.activeEditor.execCommand('mceInsertContent', false, spchr.replace('@', '&#x'));
				   }
				   else if(e.ctrlKey && e.altKey &&  e.keyCode === 191)//Ctrl+ALT+'/'  
				   {
					    //debugger;
						//alert('Paragraph');
						var spchr="@00B6;"
						window.parent.tinymce.activeEditor.execCommand('mceInsertContent', false, spchr.replace('@', '&#x'));
				   }
				   else if(e.ctrlKey && e.shiftKey &&  e.keyCode === 83)//Ctrl+Shift+'S' 
				   {
					    //debugger;
						//alert('Ellipsis');
						var spchr="@2026;"
						window.parent.tinymce.activeEditor.execCommand('mceInsertContent', false, spchr.replace('@', '&#x'));
				   }
				   else if(e.ctrlKey && e.altKey &&  e.keyCode === 222)//Ctrl+Alt+'"' 
				   {
					    //debugger;
						//alert('Single Opening Quote');
						var spchr="@2018;"
						window.parent.tinymce.activeEditor.execCommand('mceInsertContent', false, spchr.replace('@', '&#x'));
				   }
				   else if(e.ctrlKey && e.shiftKey &&  e.keyCode === 222)//Ctrl+Shift+'"' 
				   {
					    //debugger;
						//alert('Single Closing Quote');
						var spchr="@2019;"
						window.parent.tinymce.activeEditor.execCommand('mceInsertContent', false, spchr.replace('@', '&#x'));
				   }
				   else if(e.ctrlKey && e.altKey &&  e.keyCode === 219)//Ctrl+Alt+'{' 
				   {
					    //debugger;
						//alert('Double Opening Quote');
						var spchr="@201C;"
						window.parent.tinymce.activeEditor.execCommand('mceInsertContent', false, spchr.replace('@', '&#x'));
				   }
				   else if(e.ctrlKey && e.shiftKey &&  e.keyCode === 221)//Ctrl+Shift+'}' 
				   {
					    //debugger;
						//alert('Double closing Quote');
						var spchr="@201D;"
						window.parent.tinymce.activeEditor.execCommand('mceInsertContent', false, spchr.replace('@', '&#x'));
				   }
				   else if(e.ctrlKey && e.altKey &&  e.keyCode === 50)//Ctrl+Alt+'@' 
				   {
					    //debugger;
						// alert('No-Width Optional Break');
						var spchr="@200C;"
						window.parent.tinymce.activeEditor.execCommand('mceInsertContent', false, spchr.replace('@', '&#x'));
				   }
				   else if(e.ctrlKey && e.altKey &&  e.keyCode === 220)//Ctrl+Alt+'|' 
				   {
					    //debugger;
						// alert('No-Width Non Break');
						var spchr="@200D;"
						window.parent.tinymce.activeEditor.execCommand('mceInsertContent', false, spchr.replace('@', '&#x'));
				   }				  
				   //added by sathish-end
					else if (e.keyCode === 83 && e.altKey) {
                        triggerclick("Special character");
                    } else if (e.keyCode === 38 && e.altKey) {
                       var cont=ed.selection.getContent({format: 'html'});
                       ed.selection.setContent("<sup>"+cont+"</sup>");
                    } else if (e.keyCode === 40 && e.altKey) {
                        var cont=ed.selection.getContent({format: 'html'}); 
                       ed.selection.setContent("<sub>"+cont+"</sub>");
                    }else if (e.ctrlKey &&  e.keyCode === 77) { //CTRL+M
                        var gd1 = ed.dom.getParent(ed.selection.getNode(), 'div');
                        var attrcls = $(gd1).attr("class");
                        if (attrcls === "references") {
                            e.preventDefault();
                            applyHeadings("PROC");
                        } else {
                            alert("\"PROCEEDING\" can apply only in \"References\".");
                            return false;
                        }

                    }
					
					/* find using f3 key and page up and down */
                    if (e.keyCode === 113) {

                        var selection_content = tinymce.activeEditor.selection.getContent({format: "html"});
                        if (selection_content === "") {
                            var stext = prompt("Enter your text to find");
                            if (stext !== null) {
                                selection_content = stext;
                            } else {
                                return false;
                            }
                        }
                        if (selection_content !== "") {

                            function getUnique(array) {
                                var uniqueArray = [];

                                // Loop through array values
                                for (i = 0; i < array.length; i++) {
                                    if (uniqueArray.indexOf(array[i]) === -1) {
                                        uniqueArray.push(array[i]);
                                    }
                                }
                                return uniqueArray;
                            }

                            var temp_find = $(ed.getBody()).find(".body").children(".temp_f2_find").html();
                            if (temp_find === undefined) {
                                $(ed.getBody()).find(".body").prepend('<input type="hidden" class="temp_f2_find" id="temp_f2_find" value="0" name="temp_f2_find"/>');
                            } else {
                                $(ed.getBody()).find(".body").children(".temp_f2_find").val(0);
                            }

                            var scontent = ed.dom.select('.mce-match-marker');
                            $(scontent).each(function () {
                                $(this).contents().unwrap();
                            });


                            var whole_content = tinymce.activeEditor.getContent({format: "html"});

                            var sc = selection_content.replace(/([\.\*\+\?\^\$\{\}\(\)\|\[\\\]\-\&\;\:\,\!\~\/\%\#\'\"])/g, "\\$1");

                            var regex0 = new RegExp(sc + "(?!([^<]+)?>)", "gi");
                            var all_txt=whole_content.match(regex0);
                            console.log(all_txt);
                            var result = getUnique(all_txt);
                            
                           
                            for (var i = 0; i < result.length; i++) {
                                var regex = new RegExp(result[i] + "(?!([^<]+)?>)", "g");
                                whole_content = whole_content.replace(regex, "<span class=\"mce-match-marker\">" + result[i] + "</span>");
                            }

                            ed.setContent(whole_content);
                            var hidecontent = ed.dom.select('.hide');
                            $(hidecontent).each(function () {
                                $(this).find('.mce-match-marker').contents().unwrap();
                                
                            });

                            var scontent = ed.dom.select('.mce-match-marker');
                            $(scontent).each(function () {
                                $(this).removeClass('mce-match-marker-selected');
                            });
                            setTimeout(function () {
                                $(scontent).each(function (sno) {
                                    if (sno === 0) {
                                        $(this).addClass("mce-match-marker-selected");
                                        $(this)[0].scrollIntoView(true);
                                        ed.focus();
                                        ed.selection.select(this);
                                        return false;
                                    }
                                });
                            }, 80);
                            jQuery('.loader').hide();
                        }
                    } else if (e.altKey && e.keyCode === 34) {
						//~~~~~~ Page alt page down for next move ~~~~~~~~~//
                        var nextContent = ed.dom.select('.mce-match-marker');
                        $(nextContent).each(function () {
                            $(this).removeClass('mce-match-marker-selected');
                        });
                        var temp_id_val = ed.dom.select("#temp_f2_find");
                        var cid = parseInt($(temp_id_val).val()) + 1;
                        $(nextContent).each(function (sno) {
                            if (cid === sno) {
                                $(this).addClass("mce-match-marker-selected");
                                $(this)[0].scrollIntoView(true);
                                ed.focus();
                                ed.selection.select(this);
                                $(temp_id_val).val(cid);
                                if ((nextContent.length - 1) === sno) {
                                    alert("Reached end of the document");
                                }
                                return false;
                            }
                        });


                    } else if (e.altKey && e.keyCode === 33) {
						//~~~~~~ Page alt page up for previous move ~~~~~~~~~//
                        var prevContent = ed.dom.select('.mce-match-marker');
                        $(prevContent).each(function () {
                            $(this).removeClass('mce-match-marker-selected');
                        });
                        var temp_id_val = ed.dom.select("#temp_f2_find");
                        var cid = parseInt($(temp_id_val).val()) - 1;
                        $(prevContent).each(function (sno) {
                            if (cid === sno) {
                                // console.log(cid);
                                $(this).addClass("mce-match-marker-selected");
                                $(this)[0].scrollIntoView(true);
                                ed.focus();
                                ed.selection.select(this);
                                $(temp_id_val).val(cid);
                                if (sno === 0) {
                                    alert("Reached begining of the document");
                                }
                                return false;
                            }

                        });
                    }else if (e.keyCode === 27 || e.keyCode === 116) {
                     var scontent = ed.dom.select('.mce-match-marker');
                     $(scontent).each(function () {
                     $(this).contents().unwrap();
                     });
                     $(ed.getBody()).find("#temp_f2_find").remove();
                     
                     } else if (e.ctrlKey && e.shiftKey && e.keyCode === 76) {
						/*~~~~~~~ Hilight selection content ~~~~~~ */
						
						var parent = ed.dom.getParent(ed.selection.getNode(), 'span');
                        var cont = ed.selection.getContent({format: 'html'});
                        var pntcls = $(parent).attr("class");
                        if (pntcls == "Highlight") {
                            $(parent).contents().unwrap();
                        } else {
                            if (cont !== "") {
                                ed.selection.setContent('<span class="Highlight">' + cont + '</span>');
                            }
                        }
						
						/*
                        var cont = ed.selection.getContent({format: 'html'});
						 if (cont !== "") {
							ed.selection.setContent('<span class="Highlight">' + cont + '</span>');
						 }
						*/
                    }	//tec0108
					else if (e.ctrlKey && e.shiftKey && e.keyCode === 51) {
						/*~~~~~~~ FM sep ~~~~~~ */
						//alert("--");
                        var cont = ed.selection.getContent({format: 'html'});
						 if (cont !== "") {
							ed.selection.setContent('<span class="FMSEP">' + cont + '</span>');
						 }

                    }
					else if (e.altKey && e.keyCode === 84) { 
					/*~~~~~~~~~~ alt+t add and remove the table head ~~~~~~~~~~~~~*/
                        var tablehead = ed.dom.getParent(ed.selection.getNode(), '.TABLE-HEAD');
                        if (tablehead !== null) {
                            var table = ed.dom.getParent(ed.selection.getNode(), '.TABLE');
                            var trlength = $(table).children().find(".TABLE-HEAD").find("tr").length;
                            var tabrow = ed.dom.getParent(ed.selection.getNode(), 'tr');
                            if (trlength === 1) {
                                $(tablehead).contents().unwrap();
                            } else {
                                $(table).children().find("tbody").prepend(tabrow);
                            }
                        } else {
                            var table = ed.dom.getParent(ed.selection.getNode(), '.TABLE');
                            var thead_exist = $(table).children().find(".TABLE-HEAD").length;
                            var tabrow = ed.dom.getParent(ed.selection.getNode(), 'tr');
                            if (thead_exist === 1) {
                                $(table).children().find(".TABLE-HEAD").append(tabrow);
                            } else {
                                $(tabrow).wrap('<thead class="TABLE-HEAD"></thead>');
                            }
                        }
                    }
					
					// if((e.keyCode != 37&&e.keyCode != 39)&&($(tinyMCE.activeEditor.dom.getParent(tinyMCE.activeEditor.selection.getNode(),'span')).hasClass('FMSEP')||($(tinyMCE.activeEditor.dom.getParent(tinyMCE.activeEditor.selection.getNode(),'span')).hasClass('SEP')&&!$(tinyMCE.activeEditor.dom.getParent(tinyMCE.activeEditor.selection.getNode(),'p')).hasClass('OTHER')))){
					if((e.keyCode != 37&&e.keyCode != 39)&&($(tinyMCE.activeEditor.dom.getParent(tinyMCE.activeEditor.selection.getNode(),'span')).hasClass('FMSEP'))){
                        var working_Keycode = [20, 27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 44, 145, 19, 45, 36, 33, 34, 35, 37, 38, 39, 40, 192, 9, 13];
                        if((e.location == 0 || e.location == 3) && (working_Keycode.indexOf(e.keyCode) == -1))
                        {
						    e.preventDefault();
                        }
					}
                    
					if (tinyMCE.activeEditor.dom.getParent(tinyMCE.activeEditor.selection.getNode(), 'del') || tinyMCE.activeEditor.dom.getParent(tinyMCE.activeEditor.selection.getNode(), 'span.JXPRESS_LE, span.JXPRESS_ME'))
					{
                        var working_Keycode = [20, 27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 44, 145, 19, 45, 36, 33, 34, 35, 37, 38, 39, 40, 192, 9, 13];
                        if (working_Keycode.indexOf(e.keyCode) == -1 && (tinyMCE.activeEditor.dom.getParent(tinyMCE.activeEditor.selection.getNode(), 'del') || tinyMCE.activeEditor.dom.getParent(tinyMCE.activeEditor.selection.getNode(), 'span.CFIND')))
						{
                            var del_node = tinyMCE.activeEditor.selection.getNode();
                            del_node.contentEditable = false;
                            //tinyMCE.activeEditor.windowManager.alert('This place is not editable.');
                            //e.preventDefault();                            
                        }

                        if (working_Keycode.indexOf(e.keyCode) == -1 && tinyMCE.activeEditor.dom.getParent(tinyMCE.activeEditor.selection.getNode(), 'span.CFIND')) {
                            var rng = tinyMCE.activeEditor.dom.createRng();
                            //var newNode = tinyMCE.activeEditor.dom.select(tinyMCE.activeEditor.selection.getNode());
                            var newNode = $(tinyMCE.activeEditor.selection.getNode())[0].nextSibling;
                            $(newNode).html('&#xFEFF;' + $(newNode).html());
                            rng.setStart(newNode.firstChild, 0);
                            rng.setEnd(newNode.firstChild, 0);
                            tinyMCE.activeEditor.selection.setRng(rng);
                        }
                    }
                    if (e.keyCode === 32)
                    {
                        // ed.execCommand('mceInsertContent', false, " ");
                    }
                    if (e.keyCode === 48 && e.altKey)
                    {
						if(e.shiftKey){//alt+Shift+0
							removeAllAttributes('normal');	
						}else{//alt-0
							applyHeadings("normal");	
						}
                    } else if (e.keyCode === 49 && e.altKey)
                    {
                        //alt-1
                        applyHeadings("heading1");
                    } else if (e.keyCode === 49 && e.ctrlKey)
                    {
                        //ctrl-1
                        e.preventDefault();
                        $('.mce-i-indent').trigger('click');
                    } else if (e.keyCode === 50 && e.ctrlKey)
                    {
                        //ctrl-2
                        e.preventDefault();
                        $('.mce-i-outdent').trigger('click');
                    } else if (e.keyCode === 50 && e.altKey)
                    {
                        //alt-2
                        applyHeadings("heading2");
                    } else if (e.keyCode === 51 && e.altKey)
                    {
                        //alt-3
                        applyHeadings("heading3");
                    } else if (e.keyCode === 52 && e.altKey)
                    {
                        //alt-4
                        applyHeadings("heading4");
                    } else if (e.keyCode === 51 && e.ctrlKey || e.keyCode === 99 && e.ctrlKey)
                    {
                        //ctrl-3
                        e.preventDefault();
                    } else if ((e.keyCode === 52 && e.ctrlKey || e.keyCode === 100 && e.ctrlKey) && !e.shiftKey)
                    {
                        //ctrl-4
                        //Degree sign
                        e.preventDefault();
                        tinyMCE.activeEditor.selection.getNode().scrollIntoView(true);
                        insertcontent("176");
                    } else if ((e.keyCode === 53 && e.ctrlKey || e.keyCode === 101 && e.ctrlKey) && !e.altKey && !e.shiftKey)
                    {
                        //ctrl-5
                        //Prime
                        e.preventDefault();
                        tinyMCE.activeEditor.selection.getNode().scrollIntoView(true);
                        insertcontent("8242");
                    } else if ((e.keyCode === 54 && e.ctrlKey || e.keyCode === 102 && e.ctrlKey) && !e.altKey && !e.shiftKey)
                    {
                        //ctrl-6
                        //Double prime
                        e.preventDefault();
                        tinyMCE.activeEditor.selection.getNode().scrollIntoView(true);
                        insertcontent("8243");
                    } else if (e.keyCode === 53 || e.keyCode === 101)
                    {
						if(e.ctrlKey && e.altKey )
						{
							//alt-ctrl-5
							//Left single quotation mark
							e.preventDefault();
							tinyMCE.activeEditor.selection.getNode().scrollIntoView(true);
							insertcontent("8216");
							
						}
						else if(e.altKey)
						{
							//alt-5
							//Left double quotation mark
							e.preventDefault();
							tinyMCE.activeEditor.selection.getNode().scrollIntoView(true);
							insertcontent("8220");
						}
                        
                    } else if (e.keyCode === 54  || e.keyCode === 102 )
                    {
						if(e.ctrlKey && e.altKey )
						{
							//alt-ctrl-6
							//Right single quotation mark
							e.preventDefault();
							tinyMCE.activeEditor.selection.getNode().scrollIntoView(true);
							insertcontent("8217");
						}
						else if(e.altKey)
						{
							//alt-6
							//Right double quotation mark
							e.preventDefault();
							tinyMCE.activeEditor.selection.getNode().scrollIntoView(true);
							insertcontent("8221");
						}
                        
                    } else if (e.keyCode === 55 && e.ctrlKey || e.keyCode === 103 && e.ctrlKey)
                    {
                        //ctrl-7
                        //&mdash;
                        e.preventDefault();
                        tinyMCE.activeEditor.selection.getNode().scrollIntoView(true);
                        insertcontent("8211");
                    } else if (e.keyCode === 56 && e.ctrlKey || e.keyCode === 104 && e.ctrlKey)
                    {
                        //ctrl-8
                        //&ndash;
                        e.preventDefault();
                        tinyMCE.activeEditor.selection.getNode().scrollIntoView(true);
                        insertcontent("8212");
                    } else if (e.keyCode === 57 && e.ctrlKey || e.keyCode === 105 && e.ctrlKey)
                    {
                        //ctrl-9
                        //&minus;
                        e.preventDefault();
                        tinyMCE.activeEditor.selection.getNode().scrollIntoView(true);
                        insertcontent("8722");
                    } else if (e.keyCode === 48 && e.ctrlKey || e.keyCode === 96 && e.ctrlKey)
                    {
                        //ctrl-0
                        //&emsp;
                        e.preventDefault();
                        tinyMCE.activeEditor.selection.getNode().scrollIntoView(true);
                        insertcontent("8195");
                    } else if (e.keyCode === 187 && e.altKey ){//alt+= //&ensp;
                        e.preventDefault();
                        tinyMCE.activeEditor.selection.getNode().scrollIntoView(true);
                        insertcontent("8194");
                    } else if (e.keyCode === 107 && e.altKey)
                    {
                        //alt-+
                        //&ensp;
                        e.preventDefault();
                        tinyMCE.activeEditor.selection.getNode().scrollIntoView(true);
                        insertcontent("8194");
                    }

                    if (e.keyCode === 72 && e.altKey && !e.ctrlKey)
                    {
                        e.preventDefault();
                        Insertcomment("", "new", $.now());
                    }
                    if (e.keyCode === 74 && e.ctrlKey && e.shiftKey)
                    {  //ctrl-shift-j

                        e.preventDefault();
                        SingleReferences();
                    } else if (e.keyCode === 65 && e.altKey)
                    {
                        e.preventDefault();
                        //alt-A
                        applyHeadings("ArticleTitleHead");
                    } else if (e.keyCode === 66 && e.altKey && !e.ctrlKey)
                    {
                        e.preventDefault();
                        //alt-B
                        applyHeadings("BOOK");
                    } else if (e.keyCode === 67 && e.altKey)
                    {
                        e.preventDefault();
                        if (e.shiftKey)
                        {
                            //alt-shift-C
                            triggerclick("Crossref-Connection");
                        } else
                        {
                            //alt-C
                            triggerclick("Character Styles");
                        }
                    } else if (e.keyCode === 69 && e.altKey)
                    {
                        e.preventDefault();
                        //alt-E
                        applyHeadings("EDBK");
                    } else if (e.keyCode === 70 && e.altKey)
                    {
                        e.preventDefault();
                        //alt-F
                        applyHeadings("Affiliation");
                    } else if (e.keyCode === 71 && e.altKey)
                    {
                        e.preventDefault();
                        //alt-G
                        applyHeadings("AuthorGroup");
                    } else if (e.keyCode === 73 && e.altKey)
                    {
                        e.preventDefault();
                        //alt-I
                        // triggerclick("Insertlink");
                        triggerclick("Insert Link");
                    } else if (e.keyCode === 74 && e.altKey)
                    {
                        e.preventDefault();
                        //alt-O
                        applyHeadings("JRNL");
                    } else if (e.keyCode === 75 && e.altKey)
                    {
                        e.preventDefault();
                        //alt-K
                        applyHeadings("Keywords");
                    } else if (e.keyCode === 77 && e.altKey)
                    {
                        e.preventDefault();
                        //alt-M
                        triggerclick("MathEditor");
                    } else if (e.keyCode === 79 && e.altKey)
                    {
                        e.preventDefault();
                        //alt-o
                        applyHeadings("OTHER");
                    } else if (e.keyCode === 80 && e.altKey)
                    {
                        e.preventDefault();
                        if (e.shiftKey)
                        {
                            //alt-shift-P
                            triggerclick("Move to 3B2");
                        } else
                        {
                            //alt-P
                            triggerclick("Paragraph Styles");
                        }
                    } else if (e.keyCode === 81 && e.ctrlKey)
                    {
                        e.preventDefault();
                        //Ctrl-Q
                        triggerclick("Query");
                    } else if (e.keyCode === 82 && e.altKey)
                    {
                        e.preventDefault();
                        if (e.shiftKey)
                        {
                            //alt-shift-R
                            //triggerclick("RefEditor");
                            triggerclick("RefManager");
                        } else
                        {
                            //alt-R
                            triggerclick("GOTO Reference");
                        }

                    } else if (e.keyCode === 85 && e.altKey)
                    {
                        e.preventDefault();
                        //alt-U
                        applyHeadings("Abstractpara");
                    } 
					// sankar comment code for undo , redo keypress - start
      //              else if (e.keyCode === 89 && e.ctrlKey)
      //              {
      //                  e.preventDefault();
      //                  tinyMCE.activeEditor.selection.getNode().scrollIntoView(true);
      //              } else if (e.keyCode === 90 && e.ctrlKey)
      //              {
						//debugger;
      //                  e.preventDefault();
      //                  //tinyMCE.activeEditor.selection.getNode().scrollIntoView(true);
      //              }
                    // sankar comment code for undo , redo keypress - end

                });
            });

        },

    }).then(function (editors) {
        $('.mce-language').find('.mce-txt').css('margin-right', '11px');
        $('#mceu_48').find('.mce-txt').css('width', '160px');
        $('#mceu_49').find('.mce-txt').css('width', '43px');
        var powered_by_html = "<span class='powered_by'><span style='font-size:15px;font-weight: bold;margin-top: 1px;'>EditPlus powered by Integra</span> <a style='cursor:pointer;' target='_blank' href='http://www.Integra.in/' title='Integra'></a></span>";
        $('.mce-path').parent().parent().css('height', '40px');
        var bottom_id = $('.mce-path').parent().append(powered_by_html);
        //$('.mce-path').html(powered_by_html);
        var selected_pro = $('#project_selection option:selected').text();
        // var company_logo = "<a style='cursor:pointer;' target='_blank' href='#'><img src='" + base_url + "assets/editor/img/Integra.png'/>";
        // $('.mce-companylogo').html(company_logo);
        var company_logo1 = "<a style='cursor:pointer;' target='_blank' href='#'><img src='" + base_url + "assets/editor/img/XPERT-Edit.png' style='width:80px;'/>";
        var BackButton = "<a style='cursor:pointer;' target='_blank' href='#'><img src='" + base_url + "assets/editor/img/Submit.jpg' style='width:40px;'/>";
        // $('.mce-BackButton').html(BackButton);
        $('.mce-companylogo1').html(company_logo1);
        $('.mce-selectproject').find('.mce-txt').text('Project(' + selected_pro + ')');
        $('.mce-zoomselect').find('.mce-txt').text('150%');
        setTimeout(function () {
            $('.mce-i-fullscreen').parent().parent().trigger('click');
            var par_id = $('.mce-i-backcolor').parent().parent().attr('id');
            var open = '#' + par_id + ' .mce-open';
            $(open).trigger('click');
            var clr_id = $('.mce-colorbutton-grid:nth-child(3)').find('div[data-mce-color="#FFFF00"]').attr('id');
            $('#' + clr_id).trigger('click');

            /*Get all class names*/

        }, 1000)

    });

   

}

function updateFunctionTimeOut() {
    setTimeout(function () {
        updateFunction();
    }, 500);
}
var exampleContainer = document.getElementById('example');
if (exampleContainer.innerHTML.trim().length == 0 || exampleContainer.innerHTML == '<br>') {
    exampleContainer.innerHTML = document.getElementById('example_content').innerHTML;
}

// Creating TINYMCE demo instance.
//createEditorInstance('en', {});  	
getmenulists();


/**
 * Getting data from editor using getContent TINYMCE method.
 * Using WIRIS formulas are parsed to WIRIS save mode format (mathml, image or base64)
 * For more information see: http://www.wiris.com/es/plugins/docs/full-mathml-mode.
 * @return {string} TINYMCE parsed data.
 */
function getEditorData() {
    return tinymce.get('example').getContent();
}
/**
 * Changes dynamically wiriseditorparameters TINYMCE config variable.
 * @param {json} json_params WIRIS editor parameters.
 */
function setParametersSpecificPlugin(wiriseditorparameters) {
    //var lang = tinyMCE.activeEditor.settings.langCode;
    //resetEditor(lang, wiriseditorparameters);
    tinyMCE.activeEditor.settings.wiriseditorparameters = wiriseditorparameters;
}

function resetEditor(lang) {
    var editor_parameters = tinyMCE.activeEditor.settings.wiriseditorparameters;
    tinymce.EditorManager.execCommand('mceRemoveEditor', true, "example");
    createEditorInstance(lang, editor_parameters);
}

/**
 * Gets wiriseditorparameters from TINYMCE.
 * @return {object} WIRIS editor parameters as JSON. An empty JSON if is not defined.
 */
function getWirisEditorParameters() {
    if (typeof tinyMCE.activeEditor.settings != 'undefined' && typeof tinyMCE.activeEditor.settings.wiriseditorparameters != 'undefined') {
        return tinyMCE.activeEditor.settings.wiriseditorparameters;
    }
    return {};
}
   
//sankar
function getContextmenulists() {
    // debugger;
    $.ajax({
        'async': false,
        'type': "POST",
        'global': false,
        'dataType': 'html',
        'url': base_url + 'home/get_All_contextmenu',
        'success': function (data) {
            contextmnu_jsonData = JSON.parse(data);
            // debugger;
            for (var i = 0; i < contextmnu_jsonData.length; i++) {
                contextmenu_disp = contextmenu_disp + contextmnu_jsonData[i].context_menu_name.trim() + ' ';
            }
            contextmenu_disp = contextmenu_disp.trim();
        }
    });
}

//Nagarajbabu added custom functions - START   
function getmenulists(){
	//read only
    const urlParam = new URLSearchParams(window.location.search);
    linkType = urlParam.get('linktype');
    //read only
	stageId = urlParam.get('stage');
	$.ajax({
		url: base_url + 'home/getdynamicmenulists',			
		dataType: 'json',  // what to expect back from the PHP script, if anything
		cache: false,
		contentType: false,
		processData: false,
		async: false,
		//data: form_data,                         
		type: 'post',
		success: function(response) {
			//console.log(response);
			mainmenu_arr=response.menulist_array;
			mainmenu_disp = response.menu_display;
			
			if (stageId) {                
                var rgxstageinit = new RegExp("CORRECTION\\d+", "gi");
                var rslt_matcxinit = stageId.match(rgxstageinit);
                if (rslt_matcxinit) {
                    mainmenu_disp = mainmenu_disp.replace('ReRun','');
                }
            }

			mainmenu_arr.forEach(function(value){
				//window[value+"_btn"] = 'My value ' + value;
				window[value+"_toolbarno"]=menu_toolcnt;
				menu_toolcnt=menu_toolcnt+1;
			});		
			
			var temp_toolcnt=3;		
			submenu_temp = response.submenulist_array;  	
			if(submenu_temp){				
				submenu_temp.forEach(function(value){			
					window["dynm_toolbar"+temp_toolcnt]=value;
					temp_toolcnt=temp_toolcnt+1;
				});  
			}
			
			createEditorInstance('en', {});  	 
		}
	}); 
}

function display_menu_by_menuname(menuname){
	var shw_toolbarno = window[menuname+"_toolbarno"];               
	var toolbarcnt_array=[1,2,3,4,5,6,7,8,9,10];  
	
	toolbarcnt_array.forEach(function(value){  
		if(value===shw_toolbarno){ 			 
			$("div[role='toolbar']:nth-child("+value+")").fadeIn(1000);
		}else{ 
			$("div[role='toolbar']:nth-child("+value+")").fadeOut(0);
		}
	});	

	if(menuname ==="renumbering")
    {
        $("div[role='toolbar']:nth-child(9)").fadeIn(1000);
    }
				
	//$hi = $(".mce-toolbar-grp").height();				
	//$(".mce-toolbar-grp").css({"height": $hi});
}


function insertDataEditorId(htmlStructure)
{
	var ch = window.location.href.substring(window.location.href.lastIndexOf("/")+1,window.location.href.length);
	var insertedTag={};
	var combineParentNode="";
	for(var amt=0;amt<$(htmlStructure).length;amt++)
	{
		// take parent element and get the all the element(based on local name of element) using dom
		var maintag = tinyMCE.activeEditor.dom.select($(htmlStructure)[amt].localName);
		var attrValue;
		if(maintag.length !=0)
		{
			var findLargeNumberElement='';
			var arrayNumber = 0;
			if(insertedTag[$(htmlStructure)[amt].localName] == undefined)
			{
				// do while is get the first value of data-editor-id
				do
				{
					if(maintag[arrayNumber].getAttribute("data-editor-id") != null)
					{
						var dataEditorAttr = maintag[arrayNumber].getAttribute("data-editor-id");
						findLargeNumberElement = parseInt(dataEditorAttr.substring(dataEditorAttr.lastIndexOf('_')+1,dataEditorAttr.length));
					}
					arrayNumber = arrayNumber+1;
				}while(findLargeNumberElement == '' && maintag.length != arrayNumber)
				// if get the first number of data-editor-id is got from below code condition satified or goes to else part insert number 1
				if(findLargeNumberElement != '')
				{
					// sorting the number which one is greatest
					for(var mt=0;mt<maintag.length;mt++)
					{
						if(maintag[mt].getAttribute("data-editor-id") != null)
						{
							nextElmAttr = maintag[mt].getAttribute("data-editor-id");
							nextlargeNumberElement = parseInt(nextElmAttr.substring(nextElmAttr.lastIndexOf('_')+1,nextElmAttr.length));
							if(findLargeNumberElement < nextlargeNumberElement)
							{
								findLargeNumberElement = nextlargeNumberElement;
							}
						}
					}
					$htmlStructure = $($(htmlStructure)[amt]).attr("data-editor-id", ch+"_"+$(htmlStructure)[amt].localName+'_'+(findLargeNumberElement+1).toString());
				}
				else
				{
					if(insertedTag[$(htmlStructure)[amt].localName] == undefined)
					{
						$htmlStructure = $($(htmlStructure)[amt]).attr("data-editor-id", ch+"_"+$(htmlStructure)[amt].localName+"_1");
						insertedTag[$(htmlStructure)[amt].localName] = "1";
					}
					else
					{
						getNumberFromMap = insertedTag[$(htmlStructure)[amt].localName];
						var lastNumberOfchildTag = (parseInt(getNumberFromMap)+1).toString();
						insertedTag[$(htmlStructure)[amt].localName] = lastNumberOfchildTag;
						$htmlStructure = $($(htmlStructure)[amt]).attr("data-editor-id", ch+"_"+$(htmlStructure)[amt].localName+"_"+lastNumberOfchildTag);
					}
				}
			}
			else
			{
				if(insertedTag[$(htmlStructure)[amt].localName] == undefined)
				{
					$htmlStructure = $($(htmlStructure)[amt]).attr("data-editor-id", ch+"_"+$(htmlStructure)[amt].localName+"_1");
					insertedTag[$(htmlStructure)[amt].localName] = "1";
				}
				else
				{
					getNumberFromMap = insertedTag[$(htmlStructure)[amt].localName];
					var lastNumberOfchildTag = (parseInt(getNumberFromMap)+1).toString();
					insertedTag[$(htmlStructure)[amt].localName] = lastNumberOfchildTag;
					$htmlStructure = $($(htmlStructure)[amt]).attr("data-editor-id", ch+"_"+$(htmlStructure)[amt].localName+"_"+lastNumberOfchildTag);
				}
			}
		}
		else
		{
			if(insertedTag[$(htmlStructure)[amt].localName] == undefined)
			{
				$htmlStructure = $($(htmlStructure)[amt]).attr("data-editor-id", ch+"_"+$(htmlStructure)[amt].localName+"_1");
				insertedTag[$(htmlStructure)[amt].localName] = "1";
			}
			else
			{
				getNumberFromMap = insertedTag[$(htmlStructure)[amt].localName];
				var lastNumberOfchildTag = (parseInt(getNumberFromMap)+1).toString();
				insertedTag[$(htmlStructure)[amt].localName] = lastNumberOfchildTag;
				$htmlStructure = $($(htmlStructure)[amt]).attr("data-editor-id", ch+"_"+$(htmlStructure)[amt].localName+"_"+lastNumberOfchildTag);
			}
		}
		$arrayChildElem = $htmlStructure.find('*[data-editor-id]');
		if($arrayChildElem.length != 0)
		{
			for(var ace=0;ace<$arrayChildElem.length;ace++)
			{
				var cfindLargeNumberElement = '';
				var carrayNumber = 0;
				var childtag = tinyMCE.activeEditor.dom.select($arrayChildElem[ace].localName);
				if(childtag.length!=0)
				{
					if(insertedTag[$arrayChildElem[ace].localName] == undefined)
					{
						do
						{
							if(childtag[carrayNumber].getAttribute("data-editor-id") != null)
							{
								var dataEditorAttr = childtag[carrayNumber].getAttribute("data-editor-id");
								cfindLargeNumberElement = parseInt(dataEditorAttr.substring(dataEditorAttr.lastIndexOf('_')+1,dataEditorAttr.length));
							}
							carrayNumber = carrayNumber+1;
						}while(cfindLargeNumberElement == '' && childtag.length != carrayNumber)
						if(cfindLargeNumberElement != '')
						{
							for(var ct=0;ct<childtag.length;ct++)
							{
								if(childtag[ct].getAttribute("data-editor-id") != null)
								{
									cnextElmAttr = childtag[ct].getAttribute("data-editor-id");
									cnextlargeNumberElement = parseInt(cnextElmAttr.substring(cnextElmAttr.lastIndexOf('_')+1,cnextElmAttr.length));
									if(cfindLargeNumberElement < cnextlargeNumberElement)
									{
										cfindLargeNumberElement = cnextlargeNumberElement;
									}
								}
							}
							$($arrayChildElem[ace]).attr("data-editor-id", ch+"_"+$arrayChildElem[ace].localName+"_"+(cfindLargeNumberElement+1).toString());
							insertedTag[$arrayChildElem[ace].localName] = (cfindLargeNumberElement+1).toString();
						}
						else
						{
							if(insertedTag[$arrayChildElem[ace].localName] == undefined)
							{
								$($arrayChildElem[ace]).attr("data-editor-id", ch+"_"+$arrayChildElem[ace].localName+"_1");
								insertedTag[$arrayChildElem[ace].localName] = "1";
							}
							else
							{
								getNumberFromMap = insertedTag[$arrayChildElem[ace].localName];
								var lastNumberOfchildTag = (parseInt(getNumberFromMap)+1).toString();
								insertedTag[$arrayChildElem[ace].localName] = lastNumberOfchildTag;
								$($arrayChildElem[ace]).attr("data-editor-id", ch+"_"+$arrayChildElem[ace].localName+"_"+lastNumberOfchildTag);
							}
						}
					}
					else
					{
						getNumberFromMap = insertedTag[$arrayChildElem[ace].localName];
						var lastNumberOfchildTag = (parseInt(getNumberFromMap)+1).toString();
						insertedTag[$arrayChildElem[ace].localName] = lastNumberOfchildTag;
						$($arrayChildElem[ace]).attr("data-editor-id", ch+"_"+$arrayChildElem[ace].localName+"_"+lastNumberOfchildTag);
					}
				}
				else
				{
					if(insertedTag[$arrayChildElem[ace].localName] == undefined)
					{
						$($arrayChildElem[ace]).attr("data-editor-id", ch+"_"+$arrayChildElem[ace].localName+"_1");
						insertedTag[$arrayChildElem[ace].localName] = "1";
					}
					else
					{
						getNumberFromMap = insertedTag[$arrayChildElem[ace].localName];
						var lastNumberOfchildTag = (parseInt(getNumberFromMap)+1).toString();
						insertedTag[$arrayChildElem[ace].localName] = lastNumberOfchildTag;
						$($arrayChildElem[ace]).attr("data-editor-id", ch+"_"+$arrayChildElem[ace].localName+"_"+lastNumberOfchildTag);
					}
				}
			}
		}
		combineParentNode+=$htmlStructure[0].outerHTML;
	}
	return combineParentNode;
}


function getID()
{
	$insid = Math.floor(Math.random() * (100000 - 10000 + 1) + 10000);
	$insid1 = Math.floor(Math.random() * (100000 - 10000 + 1) + 10000);
	var objToday = new Date(),
	months = new Array('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'),
	$insid = $insid + "" + objToday.getSeconds();
	$insid1 = $insid1 + "" + objToday.getSeconds();
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear(),
	curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
	curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
	var today = objToday.getDate() + "/" + curMonth + "/" + curYear + " " + curHour + ":" + curMinute + curMeridiem;
	var todayWithSec = objToday.getDate() + "/" + curMonth + "/" + curYear + " " + objToday.getHours() + ":" + curMinute + ":" +curSeconds;
	return [$insid1,today,todayWithSec];
}

	//paragraph related functions - start	
	function cutparagraph()
	{
		var IDsfortime = getID();
		$arrayOfSelNodes = tinyMCE.activeEditor.selection.getSelectedBlocks();
		$psateCode=[];
		if($arrayOfSelNodes.length==1)
		{
			for(var asn=0;asn<$arrayOfSelNodes.length;asn++)
			{
				$psateCode.push($arrayOfSelNodes[asn].outerHTML);
				var data_edit_attr = $arrayOfSelNodes[asn].getAttribute("data-editedtype");
				var data_editore_att_val = "";
				if(data_edit_attr != null && data_edit_attr != 'cut-para')
					data_editore_att_val  = data_edit_attr+'|cut-para';
				else
					data_editore_att_val = 'cut-para';
				$($arrayOfSelNodes[asn]).attr('data-editedtype', data_editore_att_val);
				$codeDel =  "<del class='del cts-1' data-cid='" + IDsfortime[0] + "' data-userid='11' data-username='" + usname + "' data-time='" + $.now() + "' title='Inserted by " + usname + " - " + IDsfortime[1] + "'>"+$arrayOfSelNodes[asn].innerHTML+ "</del>";
				$($arrayOfSelNodes[asn]).html($codeDel);
			}
		}
		else
		{
			tinyMCE.activeEditor.windowManager.alert("Select any one paragraph");
		}
						
	}
			
	function pasteparagraph()
	{
		var IDsfortime = getID();
		if($psateCode.length!=0)
		{
			for(var asnp=0;asnp<$psateCode.length;asnp++)
			{
				$codeins =  "<ins class='ins cts-1' data-cid='" + IDsfortime[0] + "' data-userid='11' data-username='" + usname + "' data-time='" + $.now() + "' title='Inserted by " + usname + " - " + IDsfortime[1] + "'>"+$($psateCode[asnp])[0].innerHTML+ "</ins>";
				$changeInsertElem = $($psateCode[asnp]).html($codeins);
				var data_edit_attr = $changeInsertElem.attr("data-editedtype");
				var data_editore_att_val = "";
				if(data_edit_attr != null && data_edit_attr != 'paste-para')
				{
					data_editore_att_val  = data_edit_attr+'|paste-para';
				}
				else
				{
					data_editore_att_val = 'paste-para';
				}
				$changeInsertElem.attr('data-editedtype',data_editore_att_val);
				tinyMCE.activeEditor.execCommand('mceInsertContent', false, $changeInsertElem[0].outerHTML);
			}
			$psateCode=[];
		}
		else
		{
			tinyMCE.activeEditor.windowManager.alert("no paragraph to paste...");
		}
	}
	
	function mergeparagraph(){
        // Textcomment("", "new", $.now());
        var content = tinyMCE.activeEditor.selection.getContent({
            'format': 'html'
        });
        var curent_Node = tinyMCE.activeEditor.selection.getNode();
		var next_Node = tinyMCE.activeEditor.selection.dom.getNext(tinyMCE.activeEditor.selection.getNode(),"p")
		var present_content = curent_Node.innerHTML
		var Next_content = next_Node.innerHTML;
		var firstpara_attr = tinyMCE.activeEditor.selection.dom.getAttribs(curent_Node);
		var secondpara_att= tinyMCE.activeEditor.selection.dom.getAttribs(next_Node);
		var firstpara_id = "";
		var secondpara_id = "";
		for(var t = 0 ; t < firstpara_attr.length ; t++){
			if (firstpara_attr[t].name == "data-editor-id")
			{
				firstpara_id=firstpara_attr[t].value
			}
		}
		for(var t = 0 ; t < secondpara_att.length ; t++){
			if (secondpara_att[t].name == "data-editor-id")
			{
				secondpara_id=secondpara_att[t].value
			}
		}
		var New_id = "ldmerge-"+firstpara_id+"~"+secondpara_id;
		tinyMCE.activeEditor.selection.dom.setAttrib(tinyMCE.activeEditor.selection.getNode(), 'data-editedtype', New_id);
		tinyMCE.activeEditor.selection.dom.setHTML(curent_Node, present_content+ '<ins class="ins cts-1" data-time =\"'+$.now()+'\" >&nbsp;</ins>'+Next_content );
		tinyMCE.activeEditor.selection.dom.remove(next_Node);
    }	
	
	function deleteparagraph(){
        triggerclick("Apply Styles");
        $('#example_ifr').css('width', '100%');
        var appenddata = "";
        var ed = tinyMCE.get('example');
        var body = tinyMCE.activeEditor.selection.getNode();
        var anchortag = body.getElementsByTagName('a');
        if(anchortag.length !=0){
          $("#pstyleslist").load($anchortagprocess, {
            HOSTNAME: $HOSTNAME//,
            //CLASSNAME: $divclassname
            }, function () {
          });
        }
        var curent_Node = tinyMCE.activeEditor.selection.getNode();
        var data_edit_attr = tinyMCE.activeEditor.selection.getNode().getAttribute("data-editedtype");
        var data_editore_att_val = "";
        var selcn = ed.selection.getContent({format: 'html'});
        $insid = Math.floor(Math.random() * (100000 - 10000 + 1) + 10000);
        $insid1 = Math.floor(Math.random() * (100000 - 10000 + 1) + 10000);
        var objToday = new Date(),
			months = new Array('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'),
        $insid = $insid + "" + objToday.getSeconds();
        $insid1 = $insid1 + "" + objToday.getSeconds();
        curMonth = months[objToday.getMonth()],
        curYear = objToday.getFullYear(),
        curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
        curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
        curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
        curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
        var today = objToday.getDate() + "/" + curMonth + "/" + curYear + " " + curHour + ":" + curMinute + curMeridiem;
        if(data_edit_attr != null && data_edit_attr != 'delete-para')
			data_editore_att_val  = data_edit_attr+',delete-para';
		else
			data_editore_att_val = 'delete-para';
			
		tinyMCE.activeEditor.selection.dom.setAttrib(tinyMCE.activeEditor.selection.getNode(), 'data-editedtype', data_editore_att_val);
		$code =  "<del class='del cts-1' data-cid='" + $insid1 + "' data-userid='11' data-username='" + usname + "' data-time='" + $.now() + "' title='Inserted by " + usname + " - " + today + "'>"+curent_Node.innerHTML+ "</del>";
        tinymce.activeEditor.selection.dom.setHTML(tinyMCE.activeEditor.selection.getNode(),$code);													    
    }	

	//paragraph related functions - end	

	//list related functions - start	
	function listtopara(){
        triggerclick("Apply Styles");        
		$('#example_ifr').css('width', '100%');   
		$('#example_ifr').parent().append("<div class='RightSidePanel'><div class='Parastyles' style='position:relative;left:0;'><div id='pstyleslist'  style='width:28%'></div></div> ");
									
        $("#pstyleslist").load($listtopara, {
            HOSTNAME: $HOSTNAME//,
            //CLASSNAME: $divclassname
            }, function () {
        });
    }
	function listitemtopara(){
        triggerclick("Apply Styles");
        $('#example_ifr').css('width', '100%');   
		$('#example_ifr').parent().append("<div class='RightSidePanel'><div class='Parastyles' style='position:relative;left:0;'><div id='pstyleslist'  style='width:28%'></div></div> ");
			
        $("#pstyleslist").load($listitemtopara, {
            HOSTNAME: $HOSTNAME//,
				//CLASSNAME: $divclassname
            }, function () {
        });
    }	
	function deletelistitem(){	
		triggerclick("Apply Styles");
		$('#example_ifr').css('width', '100%');   
		$('#example_ifr').parent().append("<div class='RightSidePanel'><div class='Parastyles' style='position:relative;left:0;'><div id='pstyleslist'  style='width:28%'></div></div> ");
			
		$("#pstyleslist").load($deletelistitem, {
			HOSTNAME: $HOSTNAME
			}, function () {
		});
		focus_cnt();
    }	
	function restartlist(){
        tinyMCE.activeEditor.windowManager.open({
            title: "Restart list No",
            body: {type: 'textbox', name: 'listno', id: 'listno', label: 'Start Number', placeholder: 'Enter Start Number'},
            width: 520,
            height: 100,
            onClose: function () { 
				var ed = tinyMCE.get('example');
                tinyMCE.activeEditor.focus();
                ed.setProgressState(0); // Hide progress
            },
            buttons: [{
                text: 'OK',
                subtype: 'primary',
                onclick: function (e) {debugger;
                    var number = $('#listno').val();
                    if (number == '') {
                        alert('Reference number is required');
                        return false;
                    }else
                    {
                      var ollist = tinyMCE.activeEditor.selection.dom.getParent(tinyMCE.activeEditor.selection.getNode(),'ol');
                      if(ollist!=null){
                        ollist.setAttribute('start',number);
                        var attrname = ollist.getAttribute('data-editedtype');
                        if(attrname==null){
                          ollist.setAttribute('data-editedtype','restart-list');
                        }
                        else if(attrname!=null){
                            if(!attrname.match('restart'))
                            {
                              var attrname =  attrname+'|'+'restart-list';
                              ollist.setAttribute('data-editedtype',attrname);
                            }
                            else if(attrname.match('restart')){
                              ollist.setAttribute('data-editedtype',attrname);
                            }
                        }
                      }
                    }
                        $('.mce-close').trigger('click');
                }
            },
            {
                text: 'Close',
                onclick: function () {
                    $('.mce-close').trigger('click');
                }
            }],
        });
    }
	//list related functions - end	

	function download_files_by_name_extension(custom_file_name, ext){
		if(custom_file_name !=='' && ext !==''){
			
            $.ajax({
                type: 'post',
                url: base_url + "home/wgu_check_download_file_exist/" + custom_file_name + "/"+ext,
                data: {},
                success: function (response) {
                    if (response == "success") { //alert("succ");
                        window.location = base_url + "home/wgu_downloadfile/" + custom_file_name + "/"+ext;
                    } else {
                        alert("Sorry this file not exist!..");
                    }
                }
            });	
		}

	}
	
	function affiliation_form_popup_load(){
		jQuery('.loader').show();
        var ele_affiliation = tinymce.activeEditor.dom.getParent(tinymce.activeEditor.selection.getNode(), 'p');

        // tagging check: if same class are allowed only continous come
        let children_affiliation = ele_affiliation.children;
        let check_tag = [];
        let omit_check_tag = ['FMSEP', 'UNSTYLED-S', 'QUERY'];
        let affilication_tag_check = true;
        for(let cf=0; cf<children_affiliation.length; cf++)
        {
            let get_class = children_affiliation[cf].getAttribute('class');
            if(omit_check_tag.indexOf(get_class) == -1)
            {
                if(check_tag.indexOf(get_class) == -1)
                {
                    check_tag.push(get_class);
                }
                else{
                    if(check_tag[check_tag.length-1] != get_class)
					{
						let get_innerText = children_affiliation[cf].innerText.trim();
                        let get_all_del_tag = children_affiliation[cf].querySelectorAll('del');
                        let del_tag_text = "";
                        for(let gldt=0;gldt<get_all_del_tag.length;gldt++){
                            del_tag_text += get_all_del_tag[gldt].innerText;
                        }
                        if(del_tag_text != get_innerText)
							affilication_tag_check = false;
					}
                    else {
                        check_tag.push(get_class);
					}
                }
            }
        }
        // tagging check: if same class are allowed only continous come

        if(affilication_tag_check)
        {
            var chk_fst = 0; //if 0 means affiliation insert newly 1 means already affiliation there we need to edit.	
            var full_content;
            $ele_fmlbl = '';  $ele_unstyled = ''; 										
            $str_fmlbl = '';  					
            //$str_unstyled='<span class="UNSTYLED-S" data-element="UNSTYLED-S">&nbsp;<span>'; 	
            $str_unstyled = ''; 	
            var arr_affdet = ["Department", "Institution", "AddressDetails", "City", "State", "POSTALCODE", "Country", "Phone", "Fax", "Email", "Website"];
            var affi_arr_order = {"Department":0, "Institution":1, "City":2, "State":3, "POSTALCODE":4, "Country":5, "Phone":6, "Fax":7, "Email":8, "Website":9};
            var arr_aff_avl = [];	var affi_act_order = '';		
            
            var data_obj = {};
            data_obj.AffiliationCount = 1;
			//console.log(ele_affiliation.childNodes);
            if(ele_affiliation.childNodes.length > 0){
                for(var i=0; i<ele_affiliation.childNodes.length; i++){
                    //console.log(ele_affiliation.childNodes[i].className);
                    if(ele_affiliation.childNodes[i].className !== undefined && ele_affiliation.childNodes[i].className !=='' && ele_affiliation.childNodes[i].className !=='FMLABEL' && ele_affiliation.childNodes[i].className !=='FMSEP'){
                        arr_aff_avl.push(ele_affiliation.childNodes[i].className);
                    }
                }
            }
            arr_aff_avl = arr_aff_avl.filter( function( item, index, inputArray ) {
                return inputArray.indexOf(item) == index;
            });
            
            var arr_aff_notavl = arr_affdet.filter(e=>!arr_aff_avl.includes(e));
            for (var a of arr_aff_notavl) {
                arr_aff_avl.push(a);
            } 					
            //console.log(arr_aff_avl);
            //console.log(affi_arr_order["POSTALCODE"]);
            for (var r of arr_aff_avl) {
                if(affi_arr_order[r] !== undefined){
                    if(affi_act_order ==='')
                        affi_act_order = affi_arr_order[r];
                    else
                        affi_act_order +=','+affi_arr_order[r];
                }
            } 
            //console.log(affi_act_order);
            
            
            $divclass = ele_affiliation.getAttribute("class");
            if($divclass === "Affiliation"){	
                full_content = ele_affiliation.innerHTML;
                $ele_fmlbl = ele_affiliation.getElementsByClassName("FMLABEL"); 	
                if($ele_fmlbl.length>0)
                    $str_fmlbl = $ele_fmlbl[0].innerHTML; 
                
                data_obj.full_content = full_content;
                data_obj.Fmbl = $str_fmlbl;
                							  
                $.each(arr_affdet, function(i, val) {
                    $ele_temp='';  $str_temp=''; //$str_temp='<span class="'+val+'" data-element="'+val+'">&nbsp;<span>';							
                    $ele_temp= ele_affiliation.getElementsByClassName(val);  							
                    if($ele_temp.length>0){								
                        $str_temp = $ele_temp[0].outerHTML;					
                    }															
                    data_obj[val] = $str_temp;							
                });
                                        
                $ele_unstyled = ele_affiliation.getElementsByClassName("UNSTYLED-S");
                if($ele_unstyled.length>0){								
                    for(var i=0; i<$ele_unstyled.length; i++){
                        if($str_unstyled ==='')
                            $str_unstyled = $ele_unstyled[i].outerHTML;
                        else								
                            $str_unstyled = $str_unstyled+" | "+$ele_unstyled[i].outerHTML;  
                    }
                }
                data_obj.UnstyledContent = $str_unstyled;
                chk_fst = 1;						
            }
                                                                    
            //triggerclick("Affiliation");
            $('#example_ifr').css('width', '100%');   
            $('#example_ifr').parent().append("<div class='RightSidePanel'><div class='Parastyles' style='position:relative;left:0;'><div id='pstyleslist'  style='width:28%'></div></div> ");
                                    
            data_obj.HOSTNAME = $HOSTNAME;
            data_obj.FILEID = $('#exist_file_id').val();
            data_obj.FILENAME = $('#exist_file_name').val();
            data_obj.FILESOURCEPATH = $('#exist_file_path').val();					
            data_obj.pub_name = $('#exist_pub_name').val();
            data_obj.jur_name = $('#exist_jur_name').val();
            data_obj.CheckFirst = chk_fst;	
            data_obj.Affi_act_order = affi_act_order;						
            
            $("#pstyleslist").load($affiliationform, data_obj,				
            function () { 
                jQuery('.loader').hide();
            });
        }
        else{
            alert("Tagging Wrong !!! Please check and do the operation.");
            jQuery('.loader').hide();
        }
	}
	
	
	function authorgroup_form_popup_load(){
		jQuery('.loader').show();  
		
		//var edContent = tinymce.activeEditor.getContent();
		//console.log(edContent);
 		
		var author_cnt = 1;	
		var chk_fst = 0; //if 0 means author group insert newly 1 means already author group there we need to edit.	
		var full_content='';
		var jsonObj = [];
 		var jsonString; 
 		
        var ele_authorgroup = tinymce.activeEditor.dom.getParent(tinymce.activeEditor.selection.getNode(), 'p'); 
        $divclass = ele_authorgroup.getAttribute("class");
		if($divclass==="AuthorGroup"){	
			full_content = ele_authorgroup.innerHTML;
			//console.log(ele_authorgroup);                        
            $authorlists = ele_authorgroup.getElementsByClassName("Author");
			//console.log($authorlists);
								
            ele_authorgroup.querySelectorAll('.Author').forEach(function (a)
            {				
				$attr_corres = a.getAttribute('data-attribs-corresp');                
                $ele_surname = ''; $ele_givennames = ''; $ele_degrees = ''; $ele_affid = ''; $ele_orcidtxt = ''; $ele_emilid = '';
                $str_surname='<span class="surname" data-element="surname">&nbsp;</span';  
				$str_givennames='<span class="given-names" data-element="given-names">&nbsp;</span>'; 
				$str_degrees='<span class="role" data-element="degrees">&nbsp;</span>'; 
				$str_affid=' <span class="AFFID">&nbsp;</span>';   
				$str_orcidtxt=' <span class="ORCIDTEXT">&nbsp;</span>';
                $str_emilid = ' <span class="AUEMAIL">&nbsp;</span>';  

				$ele_surname = a.getElementsByClassName("surname"); 	                        
				$ele_givennames = a.getElementsByClassName("given-names");                        
				$ele_degrees = a.getElementsByClassName("role");                        
				$ele_affid = a.getElementsByClassName("AFFID");
				$ele_orcidtxt = a.getElementsByClassName("ORCIDTEXT");
                $ele_emilid = a.getElementsByClassName("AUEMAIL");
                
				//console.log("Author "+author_cnt);							
				if($ele_orcidtxt.length>0)
					$str_orcidtxt = $ele_orcidtxt[0].outerHTML; 
				
				if($ele_surname.length>0)
					$str_surname = $ele_surname[0].outerHTML;  								                         
                   
				if($ele_givennames.length>0)								
					$str_givennames = $ele_givennames[0].outerHTML;						                         
                   
				if($ele_degrees.length>0)
					$str_degrees = $ele_degrees[0].outerHTML;  									                         

                if ($ele_emilid.length > 0)
                    $str_emilid = $ele_emilid[0].outerHTML;

				if($ele_affid.length>0){
					$str_affid='';	
					for(var i=0; i<$ele_affid.length; i++){
						if($str_affid ==='')								
							$str_affid = $ele_affid[i].outerHTML;
						else								
							//$str_affid = $str_affid+","+$ele_affid[i].outerHTML;
							$str_affid = $str_affid+$ele_affid[i].outerHTML;
					}
				}					                         
                                         							                         
                item = {}
				item ["sno"] = author_cnt;
				item ["orcidtxt"] = $str_orcidtxt;
				item ["surname"] = $str_surname;
				item ["givennames"] = $str_givennames;
				item ["degrees"] = $str_degrees;
				item ["affid"] = $str_affid;
				item ["attr_corres"] = $attr_corres;
                item["emailid"] = $str_emilid;

				jsonObj.push(item); 								
				                        												
				author_cnt=author_cnt+1;     
            });    
			chk_fst=1;               
			jsonString = JSON.stringify(jsonObj);
			//console.log(jsonObj);	
			//console.log(jsonString);
		}
		else{ 		
			/*jQuery('.loader').hide();		
			console.log("no authorgroup selection");		
			tinyMCE.activeEditor.windowManager.alert("No authorgroup class match on selection of text in editor");*/
			jsonString = JSON.stringify(jsonObj);
		}					 
		
									
		var file_id = $('#exist_file_id').val(); 
		var temp_filename = $('#exist_file_name').val(); 
		var temp_filesourcepath = $('#exist_file_path').val(); 
							
		//triggerclick("Author Group");
		$('#example_ifr').css('width', '100%');   
		$('#example_ifr').parent().append("<div class='RightSidePanel'><div class='Parastyles' style='position:relative;left:0;'><div id='pstyleslist'  style='width:28%'></div></div> ");
							
		$("#pstyleslist").load($authorgroupform, {
			HOSTNAME: $HOSTNAME,
			FILEID: file_id,
			FILENAME: temp_filename,
			FILESOURCEPATH: temp_filesourcepath,
			CheckFirst: chk_fst,
			AuthorCount: (author_cnt-1),
			AuthorLists: jsonString,
			full_content:full_content
		},				
		function () { 		
			jQuery('.loader').hide();				
		});	
	}
	
	function composedPath(el) {
	  var path = [];
	  while (el) {
		path.push(el);
		if (el.tagName === 'HTML') {
		  path.push(document);
		  path.push(window);
		  return path;
		}
		el = el.parentElement;
	  }
	}
 
//Nagarajbabu added custom functions - END    
   

//Dhivya added custom functions - START   
function download_LATEXfile(){
    var result;
		var isbn2 = location.href.split('/');
		var isbn1 = location.href.split('/').length;
		var isbn = isbn2[isbn1-2];
		if(isbn.length > 1)
		{
      var html_filename = isbn2[isbn1-1];
		}
    
    $.ajax({
        type: 'post',
        url: base_url + "home/check_download_file_existLATEX/" + html_filename + "/html",
        data: {},
        success: function (response) {
            if (response == "success") {
                window.location = base_url + "home/downloadfileLATEX/" + html_filename + "/html";
            } else {
                alert("Sorry this file not exist!..");
            }
        }
    });
}
//Dhivya added custom functions - END  

// sankar - get element screen coordinates - start
function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + window.pageYOffset,
        right: box.right + window.pageXOffset,
        bottom: box.bottom + window.pageYOffset,
        left: box.left + window.pageXOffset
    };
}
// sankar - get element screen coordinates - end

//sankar - add close button for right side panel -start
$(document).ready(function () {
    $(document).on('mouseover', '#example_ifr,div,.mce-container,.mce-widget,button', function () {
		
        //read only
        if (linkType == 'RO') {
            $($('#example_ifr').contents().find('body')).attr('contenteditable', false);
            $($('#example_ifr').contents().find('.body')).attr('contenteditable', false);
            $(".mce-container.mce-menubar").hide();
            $(".mce-toolbar-grp.mce-container").hide();
        }
        //read only 

        if ($("div.RightSidePanel").is(":visible")) {
            if ($("div.RightSidePanel").find(".rghtclose").length <= 0) {
                $("div.RightSidePanel").append('<img src="' + base_url + 'assets/editor/img/rclose.png" class="rghtclose" title="Close" onclick="RightSideBarClose()" style="top:15px; right: 1%; position: inherit; cursor: pointer; border: 1 px solid;border: 1px solid;width:10px;"/>');
            }
        }
		if ($("div.ValidatorSidePanel").is(":visible")) {
            if ($("div.ValidatorSidePanel").find(".rghtclose").length <= 0) {
                $("div.ValidatorSidePanel").append('<img src="' + base_url + 'assets/editor/img/rclose.png" class="rghtclose" title="Close" onclick="ValidatorSideBarClose()" style="top:15px; right: 1%; position: inherit; cursor: pointer; border: 1 px solid;border: 1px solid;width:10px;"/>');
            }
        }
    });
    $(document).on('click', '#example_ifr,div,.mce-container,.mce-widget,button', function () {
        if ($("div.RightSidePanel").is(":visible")) {
            if ($("div.RightSidePanel").find(".rghtclose").length <= 0) {
                $("div.RightSidePanel").append('<img src="' + base_url + 'assets/editor/img/rclose.png" class="rghtclose" title="Close" onclick="RightSideBarClose()" style="top:15px; right: 1%; position: inherit; cursor: pointer; border: 1 px solid;border: 1px solid;width:10px;"/>');
            }
        }
		 if ($("div.ValidatorSidePanel").is(":visible")) {
            if ($("div.ValidatorSidePanel").find(".rghtclose").length <= 0) {
                $("div.ValidatorSidePanel").append('<img src="' + base_url + 'assets/editor/img/rclose.png" class="rghtclose" title="Close" onclick="ValidatorSideBarClose()" style="top:15px; right: 1%; position: inherit; cursor: pointer; border: 1 px solid;border: 1px solid;width:10px;"/>');
            }
        }
    });
	$(document).on('click', '.mce-active,.mce-widget', function () {
        if ($(this).text()) {
            $(this).attr('aria-pressed', true);
            $(this).addClass("mce-active");
        }
    });
});
function ValidatorSideBarClose() {
    $(tinyMCE.activeEditor.dom.select('span.uipag-active')).removeClass('uipag-active');
    $(tinyMCE.activeEditor.dom.doc).find('span.findhit').contents().unwrap();
    $(tinyMCE.activeEditor.dom.doc).find('span.mce-match-marker').contents().unwrap();

    pagstyleid = '';

    $(".mce-active").attr('aria-pressed', 'false');
    $(".mce-active").removeClass("mce-active");
	$(".ValidatorSidePanel").remove();
	$('#example_ifr').removeClass("ValidatorLeftPanel");
    $rsdiv = false;

    if (leftsideview) {
        $('#example_ifr').css('width', '100%');
        $('#example_ifr').css('margin-left', '0%');
        $('#example_ifr').css('padding-left', '5px');
    } else {
        $('#example_ifr').css('width', '100%');
    }

    // Add by mani.d
    $("div[aria-label='Toggle Track Changes ']").attr('aria-pressed', 'true');
    $("div[aria-label='Toggle Track Changes ']").addClass("mce-active");
    $("div[aria-label='Show/Hide Track Changes']").attr('aria-pressed', 'true');
    $("div[aria-label='Show/Hide Track Changes']").addClass("mce-active");
    // Add by mani.d
    if ($('.contentTypeWrapper').length > 0) {
        $('.mce-paragraphstyles').click();
        $('.mce-paragraphstyles').click();
    }
    setTimeout(function () { calculatingView() }, 500)
}

function RightSideBarClose() {
    $(tinyMCE.activeEditor.dom.select('span.uipag-active')).removeClass('uipag-active');
    $(tinyMCE.activeEditor.dom.doc).find('span.findhit').contents().unwrap();
    $(tinyMCE.activeEditor.dom.doc).find('span.mce-match-marker').contents().unwrap();

    pagstyleid = '';
    //$(".mce-active").each(function () {
    //    if ($(this).text()) {
    //        $rsdiv = true;
    //        $(this).click();   
    //        $rsdiv = false;
    //    }
    //});

    $(".mce-active").attr('aria-pressed', 'false');
    $(".mce-active").removeClass("mce-active");
	$(".RightSidePanel").remove();
	$(".ValidatorScreenLock").remove();
	$rsdiv = false;

    if (leftsideview) {
        $('#example_ifr').css('width', '100%');
        $('#example_ifr').css('margin-left', '0%');
        $('#example_ifr').css('padding-left', '5px');
    } else {
        $('#example_ifr').css('width', '100%');
    }

    // Add by mani.d
    $("div[aria-label='Toggle Track Changes ']").attr('aria-pressed', 'true');
    $("div[aria-label='Toggle Track Changes ']").addClass("mce-active");
    $("div[aria-label='Show/Hide Track Changes']").attr('aria-pressed', 'true');
    $("div[aria-label='Show/Hide Track Changes']").addClass("mce-active");
    // Add by mani.d
    if ($('.contentTypeWrapper').length > 0) {
        $('.mce-paragraphstyles').click();
        $('.mce-paragraphstyles').click();
    }
    setTimeout(function () { calculatingView() }, 500)
}
//sankar - add close button for right side panel -end


// added by sankar - start
function getCurrentTime() {

    var objToday = new Date(),
        months = new Array('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'),
        curMonth = months[objToday.getMonth()],
        curYear = objToday.getFullYear(),
        curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
        curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
        curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
        curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
    var today = objToday.getDate() + "/" + curMonth + "/" + curYear + " " + curHour + ":" + curMinute + curMeridiem;
    return today;
}

function open_funderpanel() {

    RightSideBarClose();
    jQuery('.loader').show();
    $rsdiv = true;
    rightsideview = true;
    nstylesdiv = true;
    var ed = tinyMCE.activeEditor.getBody();

    var div_id = $('#example_ifr').parent().attr('id');
    var iframe_h = $('#example_ifr').height();
    var body_div = $('#' + div_id).height();
    var prev_elem = $('#' + div_id).prev().height();
    var prev_elem1 = $('#' + div_id).prev().prev().height();
    var total_height = parseInt(prev_elem) + parseInt(prev_elem1) + parseInt(8);
    $('#example_ifr').parent().addClass("padding-rightbody");
    $('#example_ifr').parent().append("<div class='RightSidePanel'><div class='Parastyles' style='position:relative;left:0;'><div id='pstyleslist' ></div></div> ");
    $("#pstyleslist").load($funders, {
        HOSTNAME: $HOSTNAME
    })

    if (leftsideview) {
        $('#example_ifr').css('width', '65%');
        $('#example_ifr').css('margin-left', '10%');
        $('#example_ifr').css('padding-left', '5px');
    } else {
        $('#example_ifr').css('width', '75%');
    }

    $('.RightSidePanel').css('top', total_height + 'px');
    $('.RightSidePanel').css('height', iframe_h);

    var myStringArray = getNodeList(tinyMCE.activeEditor.getBody());
    var scroll = tinymce.DOM.getViewPort(tinymce.activeEditor.getWin()).y;
    $(".RightSidePanel").scrollTop(scroll);

    $('.RightSidePanel').css('height', iframe_h);
    $(".loader").hide();

    var ed = tinyMCE.get('example');
    var element = ed.selection.getNode();
    if (element != null) {
        element.scrollIntoView(true);
        ed.focus();
    }

}

function open_domainpanel() {

    RightSideBarClose();
    jQuery('.loader').show();
    $rsdiv = true;
    rightsideview = true;
    nstylesdiv = true;
    var ed = tinyMCE.activeEditor.getBody();

    var div_id = $('#example_ifr').parent().attr('id');
    var iframe_h = $('#example_ifr').height();
    var body_div = $('#' + div_id).height();
    var prev_elem = $('#' + div_id).prev().height();
    var prev_elem1 = $('#' + div_id).prev().prev().height();
    var total_height = parseInt(prev_elem) + parseInt(prev_elem1) + parseInt(8);
    $('#example_ifr').parent().addClass("padding-rightbody");
    $('#example_ifr').parent().append("<div class='RightSidePanel'><div class='Parastyles' style='position:relative;left:0;'><div id='pstyleslist' ></div></div> ");
    $("#pstyleslist").load($domains, {
        HOSTNAME: $HOSTNAME
    })

    if (leftsideview) {
        $('#example_ifr').css('width', '65%');
        $('#example_ifr').css('margin-left', '10%');
        $('#example_ifr').css('padding-left', '5px');
    } else {
        $('#example_ifr').css('width', '75%');
    }

    $('.RightSidePanel').css('top', total_height + 'px');
    $('.RightSidePanel').css('height', iframe_h);

    var myStringArray = getNodeList(tinyMCE.activeEditor.getBody());
    var scroll = tinymce.DOM.getViewPort(tinymce.activeEditor.getWin()).y;
    $(".RightSidePanel").scrollTop(scroll);

    $('.RightSidePanel').css('height', iframe_h);
    $(".loader").hide();

    var ed = tinyMCE.get('example');
    var element = ed.selection.getNode();
    if (element != null) {
        element.scrollIntoView(true);
        ed.focus();
    }

}

function scrollview_ref($refid) {
    setTimeout(function () {
    var ed = tinyMCE.get('example');
        var selRef = tinyMCE.activeEditor.dom.select('#' + $refid);
        $(selRef)[0].scrollIntoView(true);
        ed.focus();
        ed.selection.select($(selRef)[0]);
        }, 1000);
}

function FpagetoArticleID() {
    var ed = tinyMCE.get('example');
    $inirefconfig = null;
    var RefElmnt = ed.dom.getParent(ed.selection.getNode(), 'div');
    $divclass = RefElmnt.getAttribute("class");
    if ($divclass == "references") {

        var RefP_Elmnt = ed.dom.getParent(ed.selection.getNode(), 'p');
        $Reftype = RefP_Elmnt.getAttribute("class");

        var curr_node = ed.selection.getNode();
        //check CRINS class
        if ($(curr_node).attr('class') == 'CRINS') {
            curr_node = $(curr_node).parent(); //ed.dom.getParent(ed.selection.getNode(), '.FPAGE');
        }

        if ($(curr_node).attr('class') != 'FPAGE') {
            tinyMCE.activeEditor.windowManager.alert("Please select Fpage Content!");
            return;
        }

        var prev_tag_class = '';
        var prev_sep_class = $(curr_node).prev().attr('class');

        if (prev_sep_class == "SEP") {
            prev_tag_class = $(curr_node).prev().prev().attr('class');
        }
        else {
            prev_tag_class = $(curr_node).prev().attr('class');
        }

        $.ajax({
            'async': false,
            'type': "POST",
            'global': false,
            'dataType': 'html',
            'url': base_url + 'home/GETBIB_SEPERATORS_CONTENTS',
            'success': function (data) {

                $inirefconfig = $.trim(data);

                if ($inirefconfig) {
                    var rgxrefType = new RegExp("<" + $Reftype + "-TYPE>([\\S|\\s])*<\/" + $Reftype + "-TYPE>", "gi");
                    var rslt_ref_Type = $inirefconfig.match(rgxrefType);

                    if (rslt_ref_Type) {
                        var rgxsepType = new RegExp("<SEP-TAGS>(\\S|\\s)*<\/SEP-TAGS>", "gi");
                        var rslt_sep_Type = rslt_ref_Type[0].match(rgxsepType);

                        if (rslt_sep_Type) {
                            var sepText = rslt_sep_Type[0].replace(/(<\/[a-z|A-Z]*><SEP>)/gi, "###$1");

                            if (sepText) {
                                sepText = sepText.replace("<SEP-TAGS>", "").replace("</SEP-TAGS>", "")
                                var list_sep = sepText.split("###");
                                if (list_sep.length > 0) {

                                    var rgxPrevStyle_Type = new RegExp("<\/" + prev_tag_class + "><SEP>(\\S|\\s)*<\/SEP><PUBID>", "gi");
                                    var isapply = 'no';
                                    for (i = 0; i < list_sep.length; i++) {
                                        var sep_tag = list_sep[i].trim();
                                        var rslt_match_Type = sep_tag.match(rgxPrevStyle_Type);
                                        if (rslt_match_Type) {
                                            // Available in Config file - start
                                            var sep_text = rslt_match_Type[0].replace('</' + prev_tag_class + '><SEP>', '').replace('<\/SEP><PUBID>', '');
                                            if (prev_sep_class == "SEP") {
                                                $(curr_node).prev().html(sep_text);
                                                $(curr_node).attr('class', 'PUBID');
                                                isapply = 'yes';
                                            }
                                            else {
                                                $(curr_node).before('<span class="SEP">' + sep_text + '</span>');
                                                $(curr_node).attr('class', 'PUBID');
                                                isapply = 'yes';
                                            }
                                            // end 
                                        }
                                    }

                                    if (isapply == 'no') {
                                        // Not available in Config file - start
                                        if (prev_sep_class == "SEP") {
                                            $(curr_node).prev().html(', Article ID ');
                                            $(curr_node).attr('class', 'PUBID');
                                        }
                                        else {
                                            $(curr_node).before('<span class="SEP">, Article ID </span>');
                                            $(curr_node).attr('class', 'PUBID');
                                        }
                                        // end
                                    }


                                }
                            }
                        }
                    }
                }
            }
        });

    }
}

function format_RandomID() {
    $rndmid = Math.floor(Math.random() * (100000 - 10000 + 1) + 10000);
    var objToday = new Date(),
        months = new Array('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'),
        $rndmid = $rndmid + "" + objToday.getSeconds();
    return $rndmid;
}

function load_domaindata() {
    $.ajax({
        'async': false,
        'type': "POST",
        'global': false,
        'dataType': 'html',
        'url': base_url + 'home/get_All_domainlist',
        'success': function (data) {
            domainData = JSON.parse(data);
            for (var i = 0; i < domainData.length; i++) {
                domainjson.push(domainData[i]["DisplayValue"].replace(/(<([^>]+)>)/ig, ''));
            }
        }
    });
}
// added by sankar - end