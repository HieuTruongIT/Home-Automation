export const users=[
  {
    "_id": "user001",
    "email": "2251120348@ut.edu.vn",
    "passwordHash": "hashed_password",
    "role": "admin",
    "name": "Trương Trọng Hiếu",
    "avatarUrl": "",
    "status": "active",
    "createdAt": "2025-08-01T08:00:00.000Z",
    "updatedAt": "2025-08-09T08:00:00.000Z",
    "authorizedRooms": ["room001", "room002", "room003", "room004", "room005", "room006", "room007"],
    "notificationSettings": {
      "gas": true,
      "rain": true,
      "motion": true
    }
  },
  {
    "_id": "user002",
    "email": "nguyenvana@example.com",
    "passwordHash": "hashed_password",
    "role": "user",
    "name": "Nguyễn Văn A",
    "avatarUrl": "/avatars/user002.png",
    "status": "active",
    "createdAt": "2025-07-20T10:30:00.000Z",
    "updatedAt": "2025-08-10T12:00:00.000Z",
    "authorizedRooms": ["room002", "room004"],
    "notificationSettings": {
      "gas": false,
      "rain": true,
      "motion": false
    }
  },
  {
    "_id": "user003",
    "email": "lethib@example.com",
    "passwordHash": "hashed_password",
    "role": "user",
    "name": "Lê Thị B",
    "avatarUrl": "/avatars/user003.png",
    "status": "inactive",
    "createdAt": "2025-06-15T09:00:00.000Z",
    "updatedAt": "2025-08-05T15:00:00.000Z",
    "authorizedRooms": ["room001"],
    "notificationSettings": {
      "gas": true,
      "rain": false,
      "motion": true
    }
  }
];
export default users;
