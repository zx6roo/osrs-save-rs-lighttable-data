// Tool: Save rs:lightTable Data to File
// Description: Saves the current rs:lightTable data from localStorage as a downloadable text file with a date-stamped filename. Alerts if no data is found.
// Tags: OSRS, wiki, localStorage, bookmarklet, JavaScript, backup, export, file download
// ***DO NOT copy comments into bookmarklet ***

(() => {
  const data = localStorage.getItem('rs:lightTable');
  if (!data) {
    alert('No rs:lightTable data found in localStorage.');
    return;
  }
  const blob = new Blob([data], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  const dateStr = new Date().toISOString().slice(0, 10);
  a.download = `rs_lightTable_backup_${dateStr}.txt`;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
  }, 100);
  alert('✅ rs:lightTable saved as a text file!');
})();
