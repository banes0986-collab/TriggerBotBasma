function logToConsole(message, type = 'system') {
    const consoleLogs = document.getElementById('consoleLogs');
    const p = document.createElement('p');
    p.className = type === 'system' ? 'log-system' : 'log-bot';
    p.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
    consoleLogs.appendChild(p);
    consoleLogs.scrollTop = consoleLogs.scrollHeight;
}

function deployBots() {
    const ip = document.getElementById('serverIp').value;
    const count = document.getElementById('botAmount').value;

    if(!ip) return alert("Lütfen bir Sunucu IP yaz!");
    
    document.getElementById('targetDisplay').textContent = ip.toUpperCase();
    document.getElementById('botCountDisplay').textContent = `${count}/500`;
    
    logToConsole(`${ip} adresine ${count} adet bot gönderiliyor...`, 'system');
    logToConsole(`Bağlantı kuruluyor...`, 'bot');
    
    // Burada fetch ile Termux'taki Node.js sunucuna bağlanacağız
}

function sendMsg() {
    const msg = document.getElementById('globalMsg').value;
    logToConsole(`Global Mesaj Gönderildi: ${msg}`, 'bot');
}
