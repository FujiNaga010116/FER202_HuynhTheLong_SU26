import React from 'react';

function People() {
    // 1. Khởi tạo danh sách 10 đối tượng Person gốc
    const people = [
        { id: 1, name: 'Jack', age: 50 },
        { id: 2, name: 'Michael', age: 9 },
        { id: 3, name: 'John', age: 40 },
        { id: 4, name: 'Ann', age: 19 },
        { id: 5, name: 'Elisabeth', age: 16 },
        { id: 6, name: 'David', age: 25 },
        { id: 7, name: 'Emma', age: 16 }, // Cùng 16 tuổi với Elisabeth để test sắp xếp theo tên
        { id: 8, name: 'Alex', age: 30 },
        { id: 9, name: 'Chris', age: 12 },
        { id: 10, name: 'Jessica', age: 22 }
    ];

    // 2. Tìm người đầu tiên là teenager (tuổi từ 13 đến 19) từ mảng gốc
    const firstTeenager = people.find(person => person.age >= 13 && person.age <= 19);

    // 3. Sắp xếp danh sách (Tăng dần theo Tuổi, sau đó theo Tên)
    const sortedPeople = [...people].sort((a, b) => {
        if (a.age !== b.age) {
            return a.age - b.age; // Sắp xếp theo tuổi tăng dần
        }
        return a.name.localeCompare(b.name); // Tuổi bằng nhau thì xếp theo Tên (A-Z)
    });

    // Style chung cho các bảng
    const tableStyle = {
        width: '100%',
        maxWidth: '450px',
        textAlign: 'left',
        borderCollapse: 'collapse',
        boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            
            {/* PHẦN 1: KẾT QUẢ TÌM KIẾM TEENAGER */}
            <div style={{ marginBottom: '30px', padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '5px', border: '1px solid #ddd' }}>
                <h3 style={{ marginTop: 0, color: '#333' }}>Kết quả tìm kiếm Teenager đầu tiên:</h3>
                {firstTeenager ? (
                    <p style={{ margin: 0, fontSize: '16px' }}>
                        Tìm thấy: <strong>{firstTeenager.name}</strong> ({firstTeenager.age} tuổi) - ID: {firstTeenager.id}
                    </p>
                ) : (
                    <p style={{ margin: 0, color: 'red', fontWeight: 'bold' }}>No result</p>
                )}
            </div>

            {/* PHẦN 2: HIỂN THỊ SONG SONG 2 BẢNG */}
            <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                
                {/* BẢNG 1: DANH SÁCH BAN ĐẦU */}
                <div>
                    <h3 style={{ color: '#555' }}>1. Danh sách ban đầu</h3>
                    <table border="1" cellPadding="10" cellSpacing="0" style={tableStyle}>
                        <thead>
                            <tr style={{ backgroundColor: '#6c757d', color: 'white' }}>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {people.map((person) => (
                                <tr key={person.id} style={{ borderBottom: '1px solid #ddd' }}>
                                    <td>{person.id}</td>
                                    <td>{person.name}</td>
                                    <td>{person.age}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* BẢNG 2: DANH SÁCH ĐÃ SẮP XẾP */}
                <div>
                    <h3 style={{ color: '#007bff' }}>2. Danh sách đã sắp xếp (Tuổi ↑, Tên ↑)</h3>
                    <table border="1" cellPadding="10" cellSpacing="0" style={tableStyle}>
                        <thead>
                            <tr style={{ backgroundColor: '#007bff', color: 'white' }}>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedPeople.map((person) => (
                                <tr key={person.id} style={{ borderBottom: '1px solid #ddd' }}>
                                    <td>{person.id}</td>
                                    <td style={{ fontWeight: 'bold' }}>{person.name}</td>
                                    <td>{person.age}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}

export default People;