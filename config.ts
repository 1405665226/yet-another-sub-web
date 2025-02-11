export const config: Config = {
    clients: {
        自动识别: "auto",
        Clash: "clash",
        ClashR: "clashr",
        Quantumult: "quan",
        QuantumultX: "quanx",
        Loon: "loon",
        Mellow: "mellow",
        Shadowsocks: "ss",
        ShadowsocksSub: "sssub",
        ShadowsocksD: "ssd",
        ShadowsocksR: "ssr",
        Surfboard: "surfboard",
        Surge2: "surge&ver=2",
        Surge3: "surge&ver=3",
        Surge4: "surge&ver=4",
        Trojan: "trojan",
        V2Ray: "v2ray",
        Singbox: "singbox",
        混合订阅: "mixed"
    },
    switchCells: [
        { title: "TCP 快速打开", key: "tfo" },
        { title: "UDP 启用", key: "udp" },
        { title: "关闭证书检查", key: "scv" },
        { title: "显示节点类型", key: "append_type" },
        { title: "显示 Emoji 旗帜", key: "emoji" },
        { title: "仅输出为节点", key: "list" }
    ],
    remoteConfig: [
        {
            category: '通用规则',
            items: [
                {
                    label: "精简规则",
                    value:
                        "https://raw.shifeng.fun/config/config.ini?token=shifeng"
                }
            ]
        }, {
            category: "ACL4SSR 规则",
            items: [
                {
                    label: "ACL4SSR 基础规则",
                    value:
                        "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini"
                },
                {
                    label: "ACL4SSR 精简规则",
                    value:
                        "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini.ini"
                },
                {
                    label: "ACL4SSR 完整规则",
                    value:
                        "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full.ini"
                },
            ]
        }
    ]
}
