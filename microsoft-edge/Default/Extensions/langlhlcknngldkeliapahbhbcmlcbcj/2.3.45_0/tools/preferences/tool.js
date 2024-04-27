(()=>{
  class PreferencesTool extends LiChessTools.Tools.ToolBase {

    dependencies=['DetectThirdParties'];

    preferences=[
      {
        name:'advancedPreferences',
        category: 'general',
        type:'single',
        possibleValues: [false,true],
        defaultValue: false,
        advanced: true,
        hidden: true
      }
    ];

    intl={
      'en-US':{
        yes: 'Yes',
        no: 'No',
        'preferencesSaved': 'Your preferences have been saved',
        'rateThisText': 'Rate this!',
        'rateThisTitle': 'Ratings help me a lot',
        'blogLinkTitle': 'The page of the extension. Leave me a message.',
        'enableExtension': 'Enable LiChess Tools extension',
        'advancedPreferences': 'Advanced preferences',
        'options.advancedPreferences': 'Advanced preferences',
        'author': 'by %s',
        'lichessTools': 'LiChess Tools',
        'feedbackButtonTitle': 'Send feedback about LiChess Tools',
        'feedbackTitle': 'Send a message to the developer',
        'backupButtonText': 'Backup',
        'backupButtonTitle': 'LiChess Tools - backup preferences in a file',
        'restoreButtonText': 'Restore',
        'restoreButtonTitle': 'LiChess Tools - restore preferences from a file',
        'defaultValueLegend': '*Blue bordered preferences are the ones enabled by default'
      },
      'ro-RO':{
        yes: 'Da',
        no: 'Nu',
        'preferencesSaved': 'Preferin\u0163ele tale au fost salvate',
        'rateThisText': 'D\u0103-i o not\u0103!',
        'rateThisTitle': 'Notele date m\u0103 ajut\u0103 foarte mult',
        'blogLinkTitle': 'Pagina extensiei. Trimite-mi un mesaj.',
        'enableExtension': 'Activeaz\u0103 extensia LiChess Tools',
        'advancedPreferences': 'Preferin\u0163e avansate',
        'options.advancedPreferences': 'Preferin\u0163e avansate',
        'author': 'de %s',
        'lichessTools': 'LiChess Tools',
        'feedbackButtonTitle': 'Trimite p\u0103reri despre LiChess Tools',
        'feedbackTitle': 'Trimite un mesaj programatorului',
        'backupButtonText': 'Backup',
        'backupButtonTitle': 'LiChess Tools - Descarc\u0103 preferin\u0163ele \u00eentr-un fi\u015Fier',
        'restoreButtonText': 'Restaurare',
        'restoreButtonTitle': 'LiChess Tools - \u00CEncarc\u0103 preferin\u0163ele dintr-un fi\u015Fier',
        'defaultValueLegend': '*Preferin\u0163ele cu margine alb\u0103strie sunt cele implicite'
      }
    }

  openPreferences=()=>{
    const parent=this.lichessTools;
    const Math=parent.global.Math;
    const $=parent.$;
    const trans=parent.translator;
    const tools=parent.tools;
    const htmlEncode=parent.htmlEncode;
    const currentOptions=parent.currentOptions;
    const applyOptions=parent.applyOptions;
    const lichess=parent.lichess;
    const isOptionSet=parent.isOptionSet;

    const lichessToolsText=trans.noarg('lichessTools');
    if (parent.global.document.title.indexOf(lichessToolsText)<0) {
      parent.global.document.title=parent.global.document.title?.replace(/^[^\s]+/,lichessToolsText);
    }

    $('nav.page-menu__menu a.active').removeClass('active');
    $('a.lichessTools-menu').addClass('active');

    const showSaved= ()=> {
      $('.saved').removeClass('none');
      parent.global.setTimeout(()=>$('.saved').addClass('none'),2000);
    };
    const checkGlobalSwitch=()=>{
      $.cached('body').toggleClass('lichessTools-globalDisable',!parent.currentOptions.enableLichessTools);
    };
    const checkAdvanced=()=>{
      this.options.advanced=!!parent.currentOptions.getValue('advancedPreferences');
      $.cached('body').toggleClass('lichessTools-advancedPreferences',this.options.advanced);
    };

    //TODO add link to translation project
    let html=`<div class="account box box-pad">
            <h1 class="box__top">$trans(LiChess Tools)</h1>
            <div class="links">
              <a class="rate" title="$trans(rateThisTitle)"
                 href="https://chromewebstore.google.com/detail/lichess-tools-by-siderite/langlhlcknngldkeliapahbhbcmlcbcj/reviews" target="_blank">$trans(rateThisText)</a>
              <a class="blog" title="$trans(blogLinkTitle)"
                 href="https://siderite.dev/blog/new-chrome-extension-lichess-tools" target="_blank">siderite.dev</a>
            </div>
            <form>
<table class="allows lichessTools-globalSwitch">
    <tbody>
        <tr>
            <td>$trans(enableExtension)</td>
            <td>
                <div class="toggle">
                    <input id="enableLichessTools" name="enableLichessTools" value="true" type="checkbox" class="form-control cmn-toggle"/>
                    <label for="enableLichessTools"/>
                </div>
            </td>
        </tr>
        <tr>
            <td>$trans(advancedPreferences)</td>
            <td>
                <div class="toggle">
                    <input id="advancedPreferences" name="advancedPreferences" value="true" type="checkbox" class="form-control cmn-toggle"/>
                    <label for="advancedPreferences"/>
                </div>
            </td>
        </tr>
    </tbody>
</table>
<h3>$trans(feedbackTitle)</h3>
<div class="feedback">
  <textarea enterkeyhint="send"></textarea>
  <button data-icon="&#xE03A;" title="$trans(feedbackButtonTitle)"></button>
</div>`;
        
    const categs={};
    for (const tool of tools) {
      if (!tool.preferences) continue;
      for (const pref of tool.preferences) {
        if (pref.hidden && !parent.debug) continue;
        let categ=categs[pref.category];
        if (!categ) {
          categ=[];
          categs[pref.category]=categ;
        }
        categ.push(pref);
      }
    }

    for (const key in categs) {
      const categ=categs[key];
      html+='<div><h3><label for="chk_'+key+'">$trans(options.'+key+')</label></h3><input type="checkbox" id="chk_'+key+'" class="categoryToggle">';
      for (const pref of categ) {
        html+=`<section data-pref="${pref.name}"`;
        const classes=[];
        if (pref.advanced) classes.push('lichessTools-advancedPreference');
        if (pref.hidden) classes.push('lichessTools-hiddenPreference');
        if (pref.wip) classes.push('lichessTools-wipPreference');
        if (classes.length) html+=' class="'+classes.join(' ')+'"'
        html+=`><h2>$trans(options.${pref.name})`;
        if (pref.author) {
          html+='<span class="lichessTools-author">$trans(author,'+htmlEncode(pref.author)+')</span>';
        }
        html+='</h2>';
        switch(pref.type) {
          case 'single': {
            html+=`<group class="radio">`;
            for (const val of pref.possibleValues) {
              const textKey=typeof val==='boolean'
                ? (val?'yes':'no')
                : (pref.valuePrefix||pref.name+'.')+val;
              html+=`<div`+(((typeof val!=='boolean' && pref.defaultValue===true)||pref.defaultValue?.toString().includes(val))?' class="defaultValue"':'')+`>
                  <input type="radio" value="${val}" name="${pref.name}"/>
                  <label>$trans(${textKey})</label>
                </div>`;
            }
            html+=`</group>`;
          }
          break;
          case 'multiple': {
            html+=`<group class="radio">`;
            for (const val of pref.possibleValues) {
              const textKey=typeof val==='boolean'
                ? (val?'yes':'no')
                : (pref.valuePrefix||pref.name+'.')+val;
              html+=`<div`+(((typeof val==='boolean' && pref.defaultValue===true)||pref.defaultValue?.toString().includes(val))?' class="defaultValue"':'')+`>
                  <input type="checkbox" value="${val}" name="${pref.name}"/>
                  <label>$trans(${textKey})</label>
                </div>`;
            }
            html+=`</group>`;
          }
          break;
          case 'number': {
            html+=`<group>
                <div`+(((typeof val==='boolean' && pref.defaultValue===true)||pref.defaultValue?.toString().includes(val))?' class="defaultValue"':'')+`>
                  <input class="form-control" type="number" name="${pref.name}"/>
                </div></group>`;
          }
          break;
          default:
            throw new Error('Preference type '+pref.type+' not supported');
        }
        html+=`</section>`;
      }
      html+=`</div>`;
    }

    html+=`</form>
<div class="actionButtons">
<span>$trans(defaultValueLegend)</span>
<button id="btnBackup" type="button" class="btn button" title="$trans(backupButtonTitle)">$trans(backupButtonText)</button>
<button id="btnRestore" type="button" class="btn button" title="$trans(restoreButtonTitle)">$trans(restoreButtonText)</button>
</div>
</div>`;
    html=html.replace(/\$trans\(([^\),]+?)(?:\s*,\s*([^\)]+?))?\)/g,function(m,name,value) {
      return htmlEncode(value?trans.pluralSame(name,value):trans.noarg(name));
    });

    const container=$('div.page-menu__content');
    let saved=$('p.saved',container);
    saved=saved.length?saved.clone():$('<p class="saved text none" data-icon="\ue038"></p>').text(trans.noarg('preferencesSaved'));
    container.empty()
      .append(html)
      .addClass('lichessTools-preferences');
    $('form',container).append(saved);
    $('form input:not(.categoryToggle)',container)
      .each((i,e)=>{
        const type=$(e).prop('type');
        const isCheckable=type=='radio'||type=='checkbox';
        const optionName=$(e).attr('name');
        const optionValue=$(e).attr('value');
        const currentValue=currentOptions[optionName];
        const preferences=this.lichessTools.tools
          .find(t=>t.preferences?.find(p=>p.name==optionName))?.preferences
          .find(p=>p.name==optionName);
        if (currentValue!==undefined) {
          if (isCheckable) {
            const checked = isOptionSet(currentValue,optionValue,preferences?.defaultValue);
            $(e).prop('checked',checked);
          }
          else {
            $(e).val(currentValue);
          }
        }
        const label=$(e).next('label');
        if (label.length) {
          let id=$(e).attr('id');
          if (!id) {
            id = (parent.random() + 1).toString(36).substring(8);
            $(e).attr('id',id);
          }
          label.attr('for',id);
        }
      })
      .on('change keyup paste',parent.debounce(async function() {
          const type=$(this).prop('type');
          const isCheckable=type=='radio'||type=='checkbox';
          const optionName=$(this).attr('name');
          const optionValues=isCheckable
		    ? $('input[name="'+optionName+'"]').filter((i,e)=>$(e).is(':checked')).map((i,e)=>$(e).attr('value')).get()
            : [$(this).val()];
          let value=optionValues.join(',');
          if (value==='true') value=true; 
          else if (value==='false') value=false;
          currentOptions[optionName]=value;
          await applyOptions(currentOptions);
          parent.fireReloadOptions();
          checkGlobalSwitch();
          checkAdvanced();
          showSaved();
      },500));
      const feedbackTextarea = $('div.feedback textarea',container)
        .on('input keypress paste send',function(ev) {
          if (this.clientHeight<this.scrollHeight) {
            $(this).height(this.scrollHeight);
          }
        }); 
      $('div.feedback button',container)
        .on('click',ev=>{
          ev.preventDefault();
          const text=feedbackTextarea.val();
          feedbackTextarea.val('').css('height','');
          if (text) {
            lichess.socket.send('msgSend',{"dest":"totalnoob69","text":text});
          }
        });
      $('div.actionButtons #btnBackup',container)
        .on('click',async ev=>{
          ev.preventDefault();
          const options=await parent.getOptions();
          const text=parent.global.JSON.stringify(options,null,2);
          const blob=new Blob([text],{type:'application/json'});
          const url=URL.createObjectURL(blob);
          $('<a>')
            .attr('download','lichesToolsOptions_'+(new Date().toISOString().replace(/[\-T:]/g,'').slice(0,14))+'.json')
            .attr('href',url)
            .trigger('click');
        });
      $('div.actionButtons #btnRestore',container)
        .on('click',async ev=>{
          ev.preventDefault();
          $('<input type="file">')
            .on('change',async e=>{
              const file = e.target.files[0];
              if (!file) return;
              const reader = new FileReader();
              reader.onload = async (e)=>{
                const text=e.target.result;
                const options=parent.global.JSON.parse(text);
                await applyOptions(options);
                parent.fireReloadOptions();
                checkGlobalSwitch();
                checkAdvanced();
                this.openPreferences();
                showSaved();
              };
              reader.readAsText(file, "UTF-8");
            })
            .trigger('click');
        });
      checkGlobalSwitch();
      checkAdvanced();
      this.addInfo();
    };

    addInfo() {
      const parent=this.lichessTools;
      const $=parent.$;
      $('div.page-menu__content section[data-pref]').each((i,e)=>{
        const pref=$(e).attr('data-pref');
        $('<a>')
          .addClass('lichessTools-infoIcon')
          .attr('title','User manual (EN)')
          .attr('data-icon','\uE005')
          .attr('href','https://siderite.dev/blog/lichess-tools---user-manual/#'+pref)
          .attr('target','_blank')
          .prependTo(e);
      });
    };

    async start() {
      const parent=this.lichessTools;
      const $=parent.$;
      const location=parent.global.location;
      const trans=parent.translator;
      this.options={
        enabled: true,
        advanced:!!parent.currentOptions.getValue('advancedPreferences')
      };
      this.logOption('Integration in Preferences', this.options.enabled);
      this.logOption(' ... show advanced', this.options.advanced);
      if (!$('main.account').length) return;
      if ($('a.lichessTools-menu').length) return;
      const openPreferences=this.openPreferences;

      const f=function() {
        if (location.hash=='#lichessTools') {
          openPreferences();
        } else {
          if ($('.lichessTools-preferences').length) {
            location.reload();
          }
        }
      };
      $(parent.global).on('hashchange',f);

      const prefElem=$('<a>')
        .addClass('lichessTools-menu')
        .attr('href','/account/preferences/display#lichessTools')
	    .append($('<span>').text(trans.noarg('LiChess Tools')));

      $('.page-menu__menu a[href*=privacy]').before(prefElem);
      f();
    }

  }
  LiChessTools.Tools.Preferences=PreferencesTool;
})();
