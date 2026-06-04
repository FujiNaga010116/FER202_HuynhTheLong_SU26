import React from 'react';

function People() {
    // 1. Tạo list gồm 10 đối tượng Person
    const people = [
        { id: 1, name: 'Jack', age: 50 },
        { id: 2, name: 'Michael', age: 9 },
        { id: 3, name: 'John', age: 40 },
        { id: 4, name: 'Ann', age: 19 }, // Teenager
        { id: 5, name: 'Elisabeth', age: 16 }, // Teenager
        { id: 6, name: 'David', age: 25 },
        { id: 7, name: 'Emma', age: 14 }, // Teenager
        { id: 8, name: 'Alex', age: 30 },
        { id: 9, name: 'Chris', age: 12 },
        { id: 10, name: 'Jessica', age: 22 }
    ];

    // 2. Tìm người đầu tiên là teenager (tuổi từ 13 đến 19)
    const firstTeenager = people.find(person => person.age >= 13 && person.age <= 19);

    return (
        <div style={{ padding: '20px' }}>
            <h2>Danh sách người dùng</h2>
            {/* Sử dụng thẻ <ol> để tự động đánh số thứ tự 1, 2, 3... */}
            <ol>
                {people.map((person) => (
                    <li key={person.id}>
                        {person.name} - {person.age} tuổi
                    </li>
                ))}
            </ol>

            <hr />

            <h2>Kết quả tìm kiếm Teenager đầu tiên</h2>
            {firstTeenager ? (
                <p>
                    Tìm thấy: <strong>{firstTeenager.name}</strong> ({firstTeenager.age} tuổi) - ID: {firstTeenager.id}
                </p>
            ) : (
                <p>No result</p>
            )}
        </div>
    );
}

export default People;