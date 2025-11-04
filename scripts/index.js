      const savedNameEl = document.getElementById('savedName');
      const nameInput = document.getElementById('nameInput');
      const saveBtn = document.getElementById('saveBtn');
      const removeBtn = document.getElementById('removeBtn');

      // Mostra il valore salvato se presente
      const updateSavedName = () => {
        const savedName = localStorage.getItem('username');
        if (savedName) {
          savedNameEl.textContent = `Nome salvato: ${savedName}`;
        } else {
          savedNameEl.textContent = '';
        }
      };

      // Salva il nome
      saveBtn.addEventListener('click', () => {
        const name = nameInput.value.trim();
        if (name) {
          localStorage.setItem('username', name);
          updateSavedName();
          nameInput.value = '';
        }
      });

      // Rimuove il nome
      removeBtn.addEventListener('click', () => {
        localStorage.removeItem('username');
        updateSavedName();
      });

      // Aggiorna all'avvio
      updateSavedName();