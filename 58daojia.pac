function FindProxyForURL(url, host) {
    if (isPlainHostName(host)
        ||isInNet(host, "10.253.0.0", "255.255.0.0")
        ||dnsDomainIs(host, 'daojia-inc.com')
        || dnsDomainIs(host, 'djtest.cn')) {
        return "PROXY 10.253.103.150:8888; DIRECT;";
    } else {
        return "DIRECT";
    }
}