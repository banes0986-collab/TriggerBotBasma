document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".test-form");
    const panelCard = document.querySelector(".panel-card");
    const startBtn = document.querySelector(".lightning-btn");

    // Eğer daha önce oluşturulmadıysa log ekranını dinamik olarak ekleyelim
    let logContainer = document.createElement("div");
    logContainer.className = "console-log-container";
    logContainer.style.cssText = `
        margin-top: 25px;
        background: #03050d;
        border: 1px solid rgba(0, 243, 255, 0.2);
        border-radius: 8px;
        padding: 15px;
        font-family: 'Courier New', Courier, monospace;
        font-size: 0.85rem;
        color: #00f3ff;
        max-height: 200px;
        overflow-y: auto;
        display: none;
        text-align: left;
        box-shadow: inset 0 0 10px rgba(0,0,0,0.8);
    `;
    panelCard.appendChild(logContainer);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Input değerlerini alalım
        const ip = document.getElementById("ip").value;
        const port = document.getElementById("port").value;
        const botCount = parseInt(document.getElementById("bot-count").value) || 100;

        // Butonu devre dışı bırakıp yükleniyor havası verelim
        startBtn.disabled = true;
        startBtn.style.opacity = "0.6";
        startBtn.querySelector(".btn-text").innerText = "BAĞLANTI KURULUYOR...";

        // Log ekranını temizle ve göster
        logContainer.innerHTML = "";
        logContainer.style.display = "block";

        addLog(`[SİSTEM] ${ip}:${port} adresine stres testi başlatılıyor...`, "#ffffff");
        addLog(`[ALTYAPI] Ryzen Dedicated sunucular aktifleşti.`, "#7a889b");
        addLog(`[UYARI] Toplam ${botCount} adet sanal bot kuyruğa alındı.`, "#ff00c8");

        let currentBot = 0;
        // Botların saniyeler içinde hızla sızmasını simüle eden döngü (Interval)
        const intervalTime = Math.max(10, 2000 / botCount); // Bot sayısına göre hızı ayarlar
        
        const botStream = setInterval(() => {
            if (currentBot < botCount) {
                currentBot++;
                // Yayında chate yazılmasını istediğin "legacybots" mesajını loga basalım
                addLog(`[BOT #${currentBot}] Sunucuya giriş yaptı -> Chate Yazıldı: "legacybots"`, "#00f3ff");
                logContainer.scrollTop = logContainer.scrollHeight; // Otomatik aşağı kaydır
            } else {
                clearInterval(botStream);
                addLog(`\n[BAŞARILI] ${botCount} bot saniyeler içinde başarıyla simüle edildi!`, "#00ff66");
                addLog(`[DURUM] Sunucu paket yükü optimize ediliyor. %99.9 Uptime korundu.`, "#00ff66");
                
                // Butonu eski haline getir
                startBtn.disabled = false;
                startBtn.style.opacity = "1";
                startBtn.querySelector(".btn-text").innerText = "SİMÜLASYONU YENİDEN BAŞLAT";
            }
        }, intervalTime);
    });

    function addLog(text, color) {
        const p = document.createElement("p");
        p.style.margin = "3px 0";
        p.style.color = color;
        p.innerText = text;
        logContainer.appendChild(p);
    }
});
