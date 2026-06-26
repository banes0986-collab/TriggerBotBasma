const mineflayer = require('mineflayer');

// Sadece senin kendi bilgisayarındaki (localhost) test sunucun için ayarlar
const botOptions = {
    host: '127.0.0.1',      // Yerel bilgisayar (localhost) adresi
    port: 25565,            // Sunucunun standart portu
    username: 'LegacyTest',  // Sunucuda görünecek test ismi
    version: '1.20.1'       // Test ettiğin sunucunun sürümü (Gerekirse değiştir)
};

console.log(`[TEST] Yerel sunucuya bağlantı denemesi başlatılıyor...`);

// Test karakterini oluşturuyoruz
const bot = mineflayer.createBot(botOptions);

// Sunucuya başarıyla adım attığında tetiklenir
bot.on('spawn', () => {
    console.log(`[BAŞARILI] ${bot.username} isimli test karakteri yerel sunucuya girdi.`);
    
    // 2 saniye sonra sunucu içine test mesajı gönderir
    setTimeout(() => {
        bot.chat('Yerel bağlantı testi başarılı.');
    }, 2000);
});

// Sunucudan atılırsa sebebini konsola yazar
bot.on('kick', (reason) => {
    console.log(`[BİLGİ] Sunucu bağlantıyı kesti. Sebep: ${reason}`);
});

// Herhangi bir ağ veya protokol hatası olursa yakalar
bot.on('error', (err) => {
    console.log(`[HATA] Bir bağlantı sorunu oluştu: ${err.message}`);
});
