/**
 * 
 * @authors cherish yii2 (cherish@cherish.pw)
 * @date    2020-12-10 16:48:28
 * @version v1.0
 * @description the core js of todolist project
 * 
 * ━━━━━━神兽出没━━━━━━
 * 　　   ┏┓　 ┏┓
 * 　┏━━━━┛┻━━━┛┻━━━┓
 * 　┃              ┃
 * 　┃       ━　    ┃
 * 　┃　  ┳┛ 　┗┳   ┃
 * 　┃              ┃
 * 　┃       ┻　    ┃
 * 　┃              ┃
 * 　┗━━━┓      ┏━━━┛ Code is far away from bugs with the animal protecting.
 *       ┃      ┃     神兽保佑,代码无bug。
 *       ┃      ┃
 *       ┃      ┗━━━┓
 *       ┃      　　┣┓
 *       ┃      　　┏┛
 *       ┗━┓┓┏━━┳┓┏━┛
 *     　  ┃┫┫　┃┫┫
 *     　  ┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */

// 请根据考试说明文档中列出的需求进行作答
// 预祝各位顺利通过本次考试，see you next week！
// ...


//  1.增加
$ (function(){
    
    
    $('input').keydown(function (event) {
        if (event.keyCode == 13) {
            
            $('input[type=text]:not(:disabled)').each(function(){
                $(this).val($.trim($(this).val()));
                    const input = $(this).val()
                    
                 if(!input) {
                     return
                 } else{ 
                    let str = ""              
                    str = `
                    <li>
                    <input type="checkbox" />
                    <p onclick="edit(3)">${input}</p>
                    <a href="javascript:remove(3)">-</a>
                    </li>
                  `  
                   $('.demo-box').append(str)
                
                   $(this).val("")
                }    
            })   
        }
    })

   
    $('ol').on('click', 'input', function(){
            
         $('ul').append($(this).parent())
         const reg = $('ol > li').length
         $('#todocount').html(reg)
           
    })


    $('ul').on('click', 'input', function(){
        
        $('ol').append($(this).parent())
        const reg = $('ul > li').length
        $('#donecount').html(reg)
               
    })

    $('ol').on('click', 'a', function(){
         $(this).parents('li').remove()
         const count = $('ol > li').length
         $('#todocount').html(count)
    })
        
        
        
        
    function edit(index){
            $('ol p').eq(index - 1).html($('<input type=text/>'))
        
    }
    

    $('ul').on('click', 'input', function(){
            
            $('ol').append($(this).parent())
            const reg = $('ul > li').length
            $('#donecount').html(reg)
                
    })
            
            
    $('ul').on('click', 'a', function(){
            $(this).parents('li').remove()
            const count = $('ul > li').length
            $('#donecount').html(count)
    })
    
})

    

    
    
    
    
    