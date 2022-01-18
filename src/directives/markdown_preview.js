const rules = [
    /*eslint-disable*/
    // Fix the new line regex in here since the end has no \n
    [/#{6}\s([^\n]+)/g,'<h6 class="m-1">$1</h6>'], // ###### hello
    [/#{5}\s([^\n]+)/g,'<h5 class="m-1">$1</h5>'], // ##### hello
    [/#{4}\s([^\n]+)/g,'<h4 class="m-1">$1</h4>'], // #### hello
    [/#{3}\s([^\n]+)/g,'<h3 class="m-1">$1</h3>'], // ### hello
    [/#{2}[ ]([^\n]+)/g,'<h2 class="m-1">$1</h2>'], // ## hello
    [/#{1}[ ]([^\n]+)/g,'<h1 class="m-1">$1</h1>'], // # hello
    [/\*(.+?)\*/g,'<i>$1</i>'], // *italics*
    [/_(.+?)_/g,'<b>$1</b>'], // _bold_
    [/~(.+?)~/g,'<em style="text-decoration:line-through;">$1</em>'], // ~strikethrough~
    [/@(.+?)/g,'<p class="m-1">$1</p>'], // @paragraph
]

export default{
    bind(el){
        let html = el.textContent;
        rules.forEach(([rule, template])=>{
            html = html.replace(rule , template);
        })    
        el.innerHTML = html;
    }
}