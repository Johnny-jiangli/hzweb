<template>
  <Row>
    <Col :span="10">
      <Form :model="data6" :label-width="180">
        <FormItem label="名称：">
          <p v-model="data6.deviceModel">{{data6.deviceModel}}</p>
        </FormItem>
        <FormItem label="用户名：">
          <p>{{data6.userName}}</p>
        </FormItem>
        <FormItem label="IP：">
          <p>{{data6.ip}}</p>
        </FormItem>
        <FormItem label="安装地点：">
          <p >{{data6.address}}</p>
        </FormItem>
      </Form>
    </Col>
    <Col :span="10">
      <Form :model="data6" :label-width="180">
        <FormItem label="产品：">
          <p>{{data6.deviceName}}</p>

        </FormItem>
        <FormItem label="密码：">
          <p>{{data6.password}}</p>
        </FormItem>
        <FormItem label="端口号：">
          <p >{{data6.port}}</p>
        </FormItem>
        <FormItem label="流分发服务器：">
          <p>{{data6.channelNums}}</p>
        </FormItem>
      </Form>
    </Col>
    <Col :span="20">
      <Form :model="data6" :label-width="180">
        <FormItem label="备注：">
          <p >{{data6.textarea}}</p >
        </FormItem>
      </Form>
    </Col>

  </Row>
</template>

<script>
  export default {
    name: "motalIA",
    data() {
      return {
        data6:{
          "remark": "1",
          "createTime": 1532489324000,
          "createId": null,
          "updateTime": null,
          "updateId": null,
          "deviceId": "1",
          "mediaId": "4",
          "deviceName": "1",
          "deviceModel": "人脸识别摄像机",
          "manufacturer": "1",
          "userName": "admin",
          "password": "admin",
          "ip": "192.168.0.1",
          "port": "80",
          "setUpTime": 1531929600000,
          "channels": 1,
          "address": "小区一号岗亭左道闸入口",
          "status": "1",
          "channelNums": null,
          "textarea":"如果有故障，请及时练习技术人员"
        }
      }
    },
    methods: {
      // value1Change: function () {
      //   var obj = this
      //   this.$emit('value1', obj.value1)
      // },
      // value2Change: function () {
      //   var obj = this
      //   this.$emit('value2', obj.value2)
      // }
    }
  }
</script>

<style scoped>

</style>
