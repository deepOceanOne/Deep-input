for example,  using the index.js  file, 

once index.js  included, one ability is provided, 

to transform  things like 'jintiantianqizhenhao' ->> '今天天气真好'

things like above. 

or 'woaibeijingtiananmen'  ->>  '我爱北京天安门'

things like that.

so using 

require 'index.js'

and then 

node test.js 

where test.js  using :

console.log(index-functions.input('jintiantianqizhenhao').output()).

which is expected to get '今天天气真好' 

that's it .