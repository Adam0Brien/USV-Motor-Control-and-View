microIoT.microIoT_MQTT_Event(microIoT.TOPIC.topic_0, function (message) {
    if (message.includes("left")) {
        radio.sendValue("left", parseFloat(message.substr(14, 3)))
        microIoT.showUserText(0, message.substr(14, 3))
    }
    if (message.includes("right")) {
        radio.sendValue("right", parseFloat(message.substr(15, 3)))
        microIoT.showUserText(0, message.substr(15, 3))
    } else if (message.includes("go")) {
        radio.sendValue("go", parseFloat(message.substr(12, 3)))
        microIoT.showUserText(0, message.substr(12, 3))
    }
    repeatSignal = parseFloat(message.substr(8, 3))
})
input.onButtonPressed(Button.A, function () {
    radio.sendValue("left", 105)
})
radio.onReceivedValue(function (name, value) {
    current = "\"" + value + "\""
    if (name == "ltc") {
        microIoT.microIoT_SendMessage(current, microIoT.TOPIC.topic_1)
        basic.pause(200)
        microIoT.microIoT_SendMessage(current, microIoT.TOPIC.topic_1)
        basic.pause(200)
    } else if (name == "rtc") {
        microIoT.microIoT_SendMessage(current, microIoT.TOPIC.topic_2)
        basic.pause(200)
        microIoT.microIoT_SendMessage(current, microIoT.TOPIC.topic_2)
        basic.pause(200)
    } else if (name == "rtv") {
        microIoT.microIoT_SendMessage(current, microIoT.TOPIC.topic_3)
        basic.pause(200)
        microIoT.microIoT_SendMessage(current, microIoT.TOPIC.topic_3)
        basic.pause(200)
    } else if (name == "ltv") {
        microIoT.microIoT_SendMessage(current, microIoT.TOPIC.topic_4)
        basic.pause(200)
        microIoT.microIoT_SendMessage(current, microIoT.TOPIC.topic_4)
        basic.pause(200)
    }
})
let current = ""
let repeatSignal = 0
microIoT.initDisplay()
basic.showIcon(IconNames.Sad)
microIoT.microIoT_WIFI("dlink_DWR-920_0867", "XDerb67823")
basic.showIcon(IconNames.Happy)
microIoT.microIoT_MQTT(
"hYn5IyqJh7U9lfVdiSvSyJb1",
"ExMVG1hBAbrE0MFpyEwJJGJXAlT6zYwr",
"Motor/Command",
microIoT.SERVERS.Global
)
microIoT.microIoT_add_topic(microIoT.TOPIC.topic_1, "Motor/leftcurrent")
microIoT.microIoT_add_topic(microIoT.TOPIC.topic_2, "Motor/rightcurrent")
microIoT.microIoT_add_topic(microIoT.TOPIC.topic_3, "Motor/rightvoltage")
microIoT.microIoT_add_topic(microIoT.TOPIC.topic_4, "Motor/leftvoltage")
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    radio.sendValue("left", repeatSignal)
})
