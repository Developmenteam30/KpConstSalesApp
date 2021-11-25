import {
    Alert,
  } from 'react-native';
import X2JS from 'x2js';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
class Api {
  logout = async () => {
    var o = [];
    var collectionStr = await this.getData(global.userId);
    if (collectionStr && collectionStr != null) {
      collectionStr.forEach(async (s) => {
        if(!s.update){
          o.push(s);
        }
      });
    }
    await api.storeData(global.userId, o);
    var l = await this.removeValue('userId');
    return l ? true : false;
  }
  getcurrentdate = () => {
    var d = new Date();
    var date_format_str =
      d.getFullYear().toString() +
      '-' +
      ((d.getMonth() + 1).toString().length == 2
        ? (d.getMonth() + 1).toString()
        : '0' + (d.getMonth() + 1).toString()) +
      '-' +
      (d.getDate().toString().length == 2
        ? d.getDate().toString()
        : '0' + d.getDate().toString()) +
      ' ' +
      (d.getHours().toString().length == 2
        ? d.getHours().toString()
        : '0' + d.getHours().toString()) +
      ':' +
      (d.getMinutes().toString().length == 2
        ? d.getMinutes().toString()
        : '0' + d.getMinutes().toString()) +
      ':00';
      return date_format_str;
  }
  removeValue = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (e) {
      return false;
      console.log(e);
    }
  };
  storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
      return true;
    } catch (e) {
      return false;
    }
  };
  getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
     return false;
    }
  };
  getpendingslips = async () => {
        try {
          var data = `<_0:ModelCRUDRequest xmlns:_0="http://idempiere.org/ADInterface/1_0">
          <_0:ModelCRUD>
          <_0:serviceType>GetPendingLoadingSlips</_0:serviceType>
          <_0:TableName></_0:TableName>
          <_0:RecordID>0</_0:RecordID>
          <_0:DataRow>
          <!--Zero or more repetitions:-->
          <_0:field column="AD_Org_ID">
          <_0:val>`+global.collectionStr.organization+`</_0:val>
          </_0:field>
          <_0:field column="Status">
          <_0:val>IP</_0:val>
          </_0:field>
          </_0:DataRow>
          </_0:ModelCRUD>
          <_0:ADLoginRequest>
          <_0:user>`+global.email+`</_0:user>
          <_0:pass>`+global.password+`</_0:pass>
          <_0:lang>en_IN</_0:lang>
          <_0:ClientID>`+global.collectionStr.client+`</_0:ClientID>
          <_0:RoleID>`+global.collectionStr.role+`</_0:RoleID>
          <_0:OrgID>`+global.collectionStr.organization+`</_0:OrgID>
          <_0:WarehouseID>`+global.collectionStr.warehouse+`</_0:WarehouseID>
          <_0:stage>2</_0:stage>
          </_0:ADLoginRequest>
          </_0:ModelCRUDRequest>`;
          var url = global.collectionStr.server+'ADInterface/services/rest/model_adservice/query_data';
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/xml',
            },
            body: data,
          })
          const responseJson = await response.text();
          var x2js = new X2JS();
          var dt = x2js.xml2js(responseJson);
          if(dt.WindowTabData.Error){
            Alert.alert(dt.WindowTabData.Error.__text);
            return false;
          }else if(dt.WindowTabData.DataSet){
            var datarow = dt.WindowTabData.DataSet.DataRow;
            return datarow;
          }
        }catch (e) {
          //Alert.alert('Please check server details.');
          return false;
        }
    };
    getcompleteslips = async (slipid, date) => {
        try {
          var data = `<_0:ModelCRUDRequest xmlns:_0="http://idempiere.org/ADInterface/1_0">
          <_0:ModelCRUD>
          <_0:serviceType>UpdateLoadingSlip</_0:serviceType>
          <_0:RecordID>`+slipid+`</_0:RecordID>
          <_0:DataRow>
          <_0:field column="LoadedTime">
          <_0:val>`+date+`</_0:val>
          </_0:field>
          <_0:field column="Status">
          <_0:val>CO</_0:val>
          </_0:field>
          <_0:field column="Processed">
          <_0:val>N</_0:val>
          </_0:field>
          <_0:field column="AD_User_ID">
          <_0:val>`+global.userId+`</_0:val>
          </_0:field>
          </_0:DataRow>
          </_0:ModelCRUD>
          <_0:ADLoginRequest>
          <_0:user>`+global.email+`</_0:user>
          <_0:pass>`+global.password+`</_0:pass>
          <_0:lang>en_IN</_0:lang>
          <_0:ClientID>`+global.collectionStr.client+`</_0:ClientID>
          <_0:RoleID>`+global.collectionStr.role+`</_0:RoleID>
          <_0:OrgID>`+global.collectionStr.organization+`</_0:OrgID>
          <_0:WarehouseID>`+global.collectionStr.warehouse+`</_0:WarehouseID>
          <_0:stage>2</_0:stage>
          </_0:ADLoginRequest>
          </_0:ModelCRUDRequest>`;
          var url = global.collectionStr.server+'ADInterface/services/rest/model_adservice/update_data';
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/xml',
            },
            body: data,
          })
          const responseJson = await response.text();
          var x2js = new X2JS();
          var dt = x2js.xml2js(responseJson);
          if(dt.StandardResponse && dt.StandardResponse.Error){
            //Alert.alert(dt.StandardResponse.Error.__text);
            return true;
          }else{
            var datarow = dt.StandardResponse;
            return datarow;
          }
        }catch (e) {
          //Alert.alert('Please check server details.');
          return false;
        }
    };
    login = async (email, password) => {
      try {
        var data = `<_0:ModelCRUDRequest xmlns:_0="http://idempiere.org/ADInterface/1_0">
        <_0:ModelCRUD>
        <_0:serviceType>Login</_0:serviceType>
        <_0:TableName></_0:TableName>
        <_0:RecordID>0</_0:RecordID>
        <_0:DataRow>
        <!--Zero or more repetitions:-->
        <_0:field column="IsActive">
        <_0:val>Y</_0:val>
        </_0:field>
        <_0:field column="Name">
        <_0:val>`+email+`</_0:val>
        </_0:field>
        <_0:field column="Password">
        <_0:val>`+password+`</_0:val>
        </_0:field>
        </_0:DataRow>
        </_0:ModelCRUD>
        <_0:ADLoginRequest>
        <_0:user>`+email+`</_0:user>
        <_0:pass>`+password+`</_0:pass>
        <_0:lang>en_IN</_0:lang>
        <_0:ClientID>`+global.collectionStr.client+`</_0:ClientID>
        <_0:RoleID>`+global.collectionStr.role+`</_0:RoleID>
        <_0:OrgID>`+global.collectionStr.organization+`</_0:OrgID>
        <_0:WarehouseID>`+global.collectionStr.warehouse+`</_0:WarehouseID>
        <_0:stage>2</_0:stage>
        </_0:ADLoginRequest>
        </_0:ModelCRUDRequest>`;
        var url = global.collectionStr.server+'ADInterface/services/rest/model_adservice/query_data';
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/xml',
          },
          body: data,
        })
        const responseJson = await response.text();
        var x2js = new X2JS();
        var dt = x2js.xml2js(responseJson);
        if(dt.WindowTabData.Error){
          Alert.alert(dt.WindowTabData.Error.__text);
          return false;
        }else if(dt.WindowTabData.DataSet){
          var userId = dt.WindowTabData.DataSet.DataRow.field.val.__text;
          return userId;
        }

      }catch (e) {
        Alert.alert('Please check server details.');
        return false;
      }
  };
}
const api = new Api();
export default api;