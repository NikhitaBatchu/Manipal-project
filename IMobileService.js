import http from '../Mobile/http-common';

class IMobileService{
    showAllMobile(){
         return http.get("mobiles");
    }
    showMobileBymodelNumber(modelNumber){
        return http.get("mobile/"+modelNumber);
    }
    deleteMobile(modelNumber){
        return http.delete("Delete/"+modelNumber);
    }
    addMobile(mobile){
        return http.post("mobile",mobile);
    }
    updateMobile(mobile){
        return http.put("mobile",mobile);
    }
}

export default new IMobileService();