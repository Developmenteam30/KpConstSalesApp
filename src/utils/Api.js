import {Alert} from 'react-native';
import X2JS from 'x2js';
import AsyncStorage from '@react-native-async-storage/async-storage';
const serverurl = 'https://demoerp.syvasoft.in/';
class Api {
  logout = async () => {
    var o = [];
    var collectionStr = await this.getData(global.userId);
    if (collectionStr && collectionStr != null) {
      collectionStr.forEach(async s => {
        if (!s.update) {
          o.push(s);
        }
      });
    }
    await api.storeData(global.userId, o);
    var l = await this.removeValue('userId');
    return l ? true : false;
  };
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
  };
  removeValue = async key => {
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
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
      return true;
    } catch (e) {
      return false;
    }
  };
  getData = async key => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      return false;
    }
  };
  getpendingslips = async () => {
    try {
      var data =
        `<_0:ModelCRUDRequest xmlns:_0="http://idempiere.org/ADInterface/1_0">
          <_0:ModelCRUD>
          <_0:serviceType>GetPendingLoadingSlips</_0:serviceType>
          <_0:TableName></_0:TableName>
          <_0:RecordID>0</_0:RecordID>
          <_0:DataRow>
          <!--Zero or more repetitions:-->
          <_0:field column="AD_Org_ID">
          <_0:val>` +
        global.collectionStr.organization +
        `</_0:val>
          </_0:field>
          <_0:field column="Status">
          <_0:val>IP</_0:val>
          </_0:field>
          </_0:DataRow>
          </_0:ModelCRUD>
          <_0:ADLoginRequest>
          <_0:user>` +
        global.email +
        `</_0:user>
          <_0:pass>` +
        global.password +
        `</_0:pass>
          <_0:lang>en_IN</_0:lang>
          <_0:ClientID>` +
        global.collectionStr.client +
        `</_0:ClientID>
          <_0:RoleID>` +
        global.collectionStr.role +
        `</_0:RoleID>
          <_0:OrgID>` +
        global.collectionStr.organization +
        `</_0:OrgID>
          <_0:WarehouseID>` +
        global.collectionStr.warehouse +
        `</_0:WarehouseID>
          <_0:stage>2</_0:stage>
          </_0:ADLoginRequest>
          </_0:ModelCRUDRequest>`;
      var url =
        global.collectionStr.server +
        'ADInterface/services/rest/model_adservice/query_data';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/xml',
        },
        body: data,
      });
      const responseJson = await response.text();
      var x2js = new X2JS();
      var dt = x2js.xml2js(responseJson);
      if (dt.WindowTabData.Error) {
        Alert.alert(dt.WindowTabData.Error.__text);
        return false;
      } else if (dt.WindowTabData.DataSet) {
        var datarow = dt.WindowTabData.DataSet.DataRow;
        return datarow;
      }
    } catch (e) {
      //Alert.alert('Please check server details.');
      return false;
    }
  };
  orderlist = async () => {
    try {
      var data = `
<_0:ModelCRUDRequest xmlns:_0="http://idempiere.org/ADInterface/1_0">
<_0:ModelCRUDRequest xmlns:_0="http://idempiere.org/ADInterface/1_0">
<_0:ModelCRUDRequest xmlns:_0="http://idempiere.org/ADInterface/1_0">
<_0:ModelCRUDRequest xmlns:_0="http://idempiere.org/ADInterface/1_0">
<_0:ModelCRUDRequest xmlns:_0="http://idempiere.org/ADInterface/1_0">
<_0:ModelCRUDRequest xmlns:_0="http://idempiere.org/ADInterface/1_0">
<_0:ModelCRUDRequest xmlns:_0="http://idempiere.org/ADInterface/1_0">
<_0:field column="AD_Org_ID">
<_0:val>1000003</_0:val>
</_0:field>
<_0:field column="C_BPartner_ID">
<_0:val>1001819</_0:val>
</_0:field>
</_0:DataRow>
</_0:ModelCRUD>
<_0:ADLoginRequest>
<_0:user>loader</_0:user>
<_0:pass>loader</_0:pass>
<_0:lang>en_IN</_0:lang>
<_0:ClientID>1000000</_0:ClientID>
<_0:RoleID>1000041</_0:RoleID>
<_0:OrgID>1000003</_0:OrgID>
<_0:WarehouseID>1000006</_0:WarehouseID>
<_0:stage>2</_0:stage>
</_0:ADLoginRequest>
</_0:ModelCRUDRequest>
<_0:stage>2</_0:stage>
</_0:ADLoginRequest>
</_0:ModelCRUDRequest>;`;

      var url =
        serverurl + 'ADInterface/services/rest/model_adservice/query_data';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/xml',
        },
        body: data,
      });
      const responseJson = await response.text();
      var x2js = new X2JS();
      var dt = x2js.xml2js(responseJson);
      console.log(dt);
      if (dt.WindowTabData.Error) {
        console.log(dt);
        return true;
      } else if (dt.WindowTabData.DataSet) {
        var datarow = dt.WindowTabData.DataSet.DataRow;
        return datarow;
      }
    } catch (e) {
      //Alert.alert('Please check server details.');
      return false;
    }
  };
  login = async (username, password) => {
    try {
      var data =
        `<_0:ModelCRUDRequest xmlns:_0="http://idempiere.org/ADInterface/1_0">
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
        <_0:val>` +
        username +
        `</_0:val>
        </_0:field>
        <_0:field column="Password">
        <_0:val>` +
        password +
        `</_0:val>
        </_0:field>
        </_0:DataRow>
        </_0:ModelCRUD>
        <_0:ADLoginRequest>
        <_0:user>` +
        username +
        `</_0:user>
        <_0:pass>` +
        password +
        `</_0:pass>
        <_0:lang>en_IN</_0:lang>
        <_0:ClientID>1000000</_0:ClientID>
        <_0:RoleID>1000041</_0:RoleID>
        <_0:OrgID>1000003</_0:OrgID>
        <_0:WarehouseID>1000006</_0:WarehouseID>
        <_0:stage>2</_0:stage>
        </_0:ADLoginRequest>
        </_0:ModelCRUDRequest>`;
      var url =
        serverurl + 'ADInterface/services/rest/model_adservice/query_data';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/xml',
        },
        body: data,
      });
      const responseJson = await response.text();
      if (responseJson) {
        var x2js = new X2JS();
        var dt = x2js.xml2js(responseJson);
        // console.log(dt.WindowTabData.DataSet.DataRow);
        if (dt.WindowTabData.Error) {
          Alert.alert(dt.WindowTabData.Error.__text);
          return false;
        } else if (dt.WindowTabData.DataSet) {
          var user = {AD_User_ID: null, Name: null, C_BPartner_ID: null};
          dt.WindowTabData.DataSet.DataRow.field.forEach(e => {
            if (e.val.__text) {
              e._column == 'AD_User_ID'
                ? (user.AD_User_ID = e.val.__text)
                : null;
              e._column == 'Name' ? (user.Name = e.val.__text) : null;
              e._column == 'C_BPartner_ID'
                ? (user.C_BPartner_ID = e.val.__text)
                : null;
            }
          });
          return user;
        }
      }
    } catch (e) {
      Alert.alert('Please check server details.');
      return false;
    }
  };
}
const api = new Api();
export default api;
