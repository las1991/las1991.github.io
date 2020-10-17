function FindProxyForURL(url, host) {
    if (isPlainHostName(host)
        || (isInNet(host, "10.253.0.0", "255.255.0.0")
		&&!isInNet(host, "10.253.1.220", "255.255.255.255"))
        || dnsDomainIs(host, 'daojia-inc.com')
        || dnsDomainIs(host, 'daojia.com')
        || dnsDomainIs(host, 'djtest.cn')) {
	if(shExpMatch(myIpAddress(),"192.168.50.*")){
		
		return "PROXY 192.168.50.146:8888; DIRECT;";
	}
        return "PROXY 10.253.103.223:8888; DIRECT;";
    } else {
        return "DIRECT";
    }
}
