
<template>
    <div>
        获取授权码界面:code={{code}}
    </div>
</template>
<script>
    var config={
        //请求授权地址
        userAuthorizationUri:"http://oauth.me.com/auth",
        //accessToken请求地址
        accessTokenUri : "http://oauth.me.com/token",
        //回调地址
        redirect_uri : "http://me.com/#/auth_code", //下节课再改
        client_id:"mainweb",
        client_secret:"123",
        //申请的权限范围,这里不做处理
        scope:"all",
        //state这里不做处理，随便写
        state:"me.com",
        grant_type : "authorization_code",
        code:"",
    }
    module.exports={
        data(){
            return {
                code:""
            }
        },
        created(){
            let url_list=self.location.href.split('?');
            if(url_list.length>1){
                const parsedQuery = Qs.parse(url_list[1])
                if(parsedQuery.code!==null){
                    this.code = parsedQuery.code
                    const postData = {
                        code:this.code,
                        scope:"all",
                        redirect_uri:config.redirect_uri,
                        grant_type: config.grant_type
                    }
                    //xxx=xxx&xxx=xx
                    axios.post(config.accessTokenUri,Qs.stringify(postData),{
                        headers:{"Content-type":"application/x-www-form-urlencoded"},
                        auth: {
                            username: config.client_id,
                            password: config.client_secret
                        }
                    })
                    .then((rsp)=>{
                        console.log(rsp.data)
                    })
                }
            }

        }
    }

</script>