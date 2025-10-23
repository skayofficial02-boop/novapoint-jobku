// Ini adalah contoh JavaScript di dalam HTML yang disajikan oleh Apps Script

function handleAddJob() {
    // Ambil data dari form
    const jobData = { ... }; 

    // Panggil fungsi 'backend' Apps Script
    google.script.run
        .withSuccessHandler(onJobAddedSuccess) // Fungsi jika berhasil
        .withFailureHandler(onFailure) // Fungsi jika gagal
        .addJobToSheet(jobData); // Nama fungsi di Apps Script
}
