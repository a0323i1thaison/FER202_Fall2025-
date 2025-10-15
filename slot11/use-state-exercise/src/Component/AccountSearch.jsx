import React, { useState } from 'react';

const accounts = [
  {
    id: 1,
    username: 'john_doe',
    password: '123456',
    avatar: 'https://i.pravatar.cc/100?img=1',
  },
  {
    id: 2,
    username: 'jane_smith',
    password: 'abcdef',
    avatar: 'https://i.pravatar.cc/100?img=2',
  },
  {
    id: 3,
    username: 'alice_wonder',
    password: 'alicepwd',
    avatar: 'https://i.pravatar.cc/100?img=3',
  },
  {
    id: 4,
    username: 'bob_builder',
    password: 'bobthebuilder',
    avatar: 'https://i.pravatar.cc/100?img=4',
  },
];

function AccountSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAccounts = accounts.filter(account =>
    account.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ maxWidth: 500, margin: '40px auto', padding: 24, background: '#f7fafd', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
      <h3 style={{ textAlign: 'center', color: '#1976d2', marginBottom: 24 }}>Tìm kiếm account theo username</h3>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Nhập username..."
        style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1.5px solid #90caf9', marginBottom: 18, fontSize: 16, outline: 'none', boxSizing: 'border-box' }}
      />
      <div>
        {filteredAccounts.length > 0 ? (
          filteredAccounts.map(account => (
            <div key={account.id} style={{ display: 'flex', alignItems: 'center', background: '#e3f2fd', borderRadius: 8, padding: '12px 16px', marginBottom: 14, boxShadow: '0 1px 4px rgba(33,150,243,0.07)' }}>
              <img src={account.avatar} alt={account.username} style={{ width: 60, height: 60, borderRadius: '50%', marginRight: 18, border: '2px solid #90caf9' }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: 18, color: '#1976d2' }}>{account.username}</div>
                <div style={{ color: '#333', fontSize: 15 }}>Password: {account.password}</div>
              </div>
            </div>
          ))
        ) : (
          <div style={{ color: '#888', textAlign: 'center', padding: '14px 0', fontSize: 16 }}>
            Không tìm thấy kết quả
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountSearch;
