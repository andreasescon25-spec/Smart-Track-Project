document.addEventListener('DOMContentLoaded', () => {
  const dateNode = document.getElementById('currentDate');
  if (dateNode) dateNode.textContent = new Date().toLocaleDateString('en-PH',{year:'numeric',month:'short',day:'numeric'});

  const pageKey = document.body.dataset.page;
  document.querySelectorAll('.nav a').forEach(link => {
    if (link.dataset.page === pageKey) link.classList.add('active');
  });

  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) mobileMenu.addEventListener('click', () => document.getElementById('sidebar')?.classList.toggle('open'));

  document.querySelectorAll('[data-modal]').forEach(button => button.addEventListener('click', () => {
    document.getElementById(button.dataset.modal)?.classList.add('show');
  }));
  document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => {
    button.closest('.modal-backdrop')?.classList.remove('show');
  }));
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => backdrop.addEventListener('click', e => {
    if (e.target === backdrop) backdrop.classList.remove('show');
  }));

  document.querySelectorAll('.demo-form').forEach(form => form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Demo only: the form layout works, but saving data will be implemented in the backend phase.');
    form.closest('.modal-backdrop')?.classList.remove('show');
    form.reset();
  }));

  document.querySelectorAll('[data-payment]').forEach(button => button.addEventListener('click', () => {
    const customer = document.getElementById('paymentCustomer');
    if (customer) customer.textContent = 'Customer: ' + button.dataset.payment;
    document.getElementById('paymentModal')?.classList.add('show');
  }));

  document.querySelectorAll('.settings-tab').forEach(tab => tab.addEventListener('click', () => {
    document.querySelectorAll('.settings-tab').forEach(t => t.classList.toggle('active', t === tab));
    document.querySelectorAll('.settings-content').forEach(content => content.classList.add('hidden'));
    document.getElementById('settings-' + tab.dataset.settings)?.classList.remove('hidden');
  }));

  document.querySelectorAll('.tab').forEach(tab => tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t === tab));
  }));
  document.querySelectorAll('.filter-chip').forEach(chip => chip.addEventListener('click', () => {
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.toggle('active', c === chip));
  }));
  document.getElementById('clearFilters')?.addEventListener('click', () => {
    document.querySelectorAll('.filter-panel select').forEach(select => select.selectedIndex = 0);
  });

  const loginForm = document.getElementById('loginForm');
  if (loginForm) loginForm.addEventListener('submit', e => {
    e.preventDefault();
    window.location.href = 'dashboard.html';
  });
});