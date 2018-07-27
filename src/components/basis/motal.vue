<template>
  <Row>
    <Col :span="10">
      <Form :model="data6" :label-width="100">
        <FormItem label="设备：">
          <Input v-model="data6.deviceName" placeholder="必填项"></Input>
        </FormItem>
        <FormItem label="用户名：">
          <Input v-model="data6.userName" placeholder="必填项"></Input>
        </FormItem>
        <FormItem label="IP：">
          <Input v-model="data6.ip" placeholder="必填项"></Input>
        </FormItem>
        <FormItem label="安装地点">
          <Input v-model="data6.address" placeholder="可选"></Input>
        </FormItem>
      </Form>
    </Col>
    <Col :span="10">
      <Form :model="data6" :label-width="100">
        <FormItem label="产品：">
          <Select v-model="data6.select" placeholder="必填项">
            <Option value="大华">New York</Option>
            <Option value="海康">London</Option>
            <Option value="三星">Sydney</Option>
          </Select>
        </FormItem>
        <FormItem label="密码：">
          <Input v-model="data6.password" placeholder="必填项"></Input>
        </FormItem>
        <FormItem label="端口号：">
          <Input v-model="data6.port" placeholder="必填项"></Input>
        </FormItem>
        <FormItem label="流分发服务器">
          <Select v-model="data6.select" placeholder="必填项">
            <Option value="beijing北京">New York</Option>
            <Option value="shanghai上海">London</Option>
            <Option value="shenzhen深圳">Sydney</Option>
          </Select>
        </FormItem>
      </Form>
    </Col>
    <Col :span="20">
      <Form :model="data6" :label-width="100">
        <FormItem label="备注：">
          <Input v-model="data6.textarea" type="textarea" placeholder="Enter something..."></Input>
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
      value1Change: function () {
        var obj = this
        this.$emit('value1', obj.data6)
      },
    }

  }
</script>

<style scoped>

</style>
