// screens/ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const ProfileScreen = ({ navigation, user }) => {
    const userData = user || {
        name: 'Ahmad Rizki',
        email: 'ahmad.rizki@email.com',
        phone: '+62 812-3456-7890',
        joinDate: '15 Jan 2023',
        profileImage: null,
        rating: 4.8,
        totalOrders: 47
    };

    const menuItems = [
        { 
            id: 1, 
            title: 'Edit Profil', 
            icon: '👤', 
            onPress: () => console.log('Edit Profil') 
        },
        { 
            id: 2, 
            title: 'Pembayaran', 
            icon: '💳', 
            onPress: () => console.log('Pembayaran') 
        },
        { 
            id: 3, 
            title: 'Alamat Saya', 
            icon: '📍', 
            onPress: () => console.log('Alamat Saya') 
        },
        { 
            id: 4, 
            title: 'Promo & Voucher', 
            icon: '🎫', 
            onPress: () => console.log('Promo & Voucher') 
        },
        { 
            id: 5, 
            title: 'Bantuan', 
            icon: '❓', 
            onPress: () => console.log('Bantuan') 
        },
        { 
            id: 6, 
            title: 'Pengaturan', 
            icon: '⚙️', 
            onPress: () => console.log('Pengaturan') 
        },
        { 
            id: 7, 
            title: 'Keluar', 
            icon: '🚪', 
            onPress: () => navigation.navigate('Login'),
            color: '#FF4444'
        },
    ];

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* Header Profile */}
            <View style={styles.profileHeader}>
                <View style={styles.avatarContainer}>
                    {userData.profileImage ? (
                        <Image source={{ uri: userData.profileImage }} style={styles.avatar} />
                    ) : (
                        <View style={styles.avatarPlaceholder}>
                            <Text style={styles.avatarText}>
                                {userData.name.split(' ').map(n => n[0]).join('')}
                            </Text>
                        </View>
                    )}
                </View>
                
                <Text style={styles.userName}>{userData.name}</Text>
                <Text style={styles.userEmail}>{userData.email}</Text>
                
                <View style={styles.statsContainer}>
                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>{userData.rating}</Text>
                        <Text style={styles.statLabel}>Rating</Text>
                    </View>
                    <View style={styles.statSeparator} />
                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>{userData.totalOrders}</Text>
                        <Text style={styles.statLabel}>Pesanan</Text>
                    </View>
                    <View style={styles.statSeparator} />
                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>⭐</Text>
                        <Text style={styles.statLabel}>Member</Text>
                    </View>
                </View>
            </View>

            {/* Profile Info Card */}
            <View style={styles.infoCard}>
                <Text style={styles.cardTitle}>Informasi Profil</Text>
                
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Telepon</Text>
                    <Text style={styles.infoValue}>{userData.phone}</Text>
                </View>
                
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Bergabung Sejak</Text>
                    <Text style={styles.infoValue}>{userData.joinDate}</Text>
                </View>
                
                <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.editButtonText}>Edit Profil</Text>
                </TouchableOpacity>
            </View>

            {/* Menu Items */}
            <View style={styles.menuSection}>
                <Text style={styles.sectionTitle}>Menu</Text>
                
                {menuItems.map((item) => (
                    <TouchableOpacity 
                        key={item.id} 
                        style={styles.menuItem}
                        onPress={item.onPress}
                    >
                        <View style={styles.menuLeft}>
                            <Text style={styles.menuIcon}>{item.icon}</Text>
                            <Text style={[
                                styles.menuText,
                                item.color && { color: item.color }
                            ]}>
                                {item.title}
                            </Text>
                        </View>
                        <Text style={styles.menuArrow}>›</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* App Info */}
            <View style={styles.appInfo}>
                <Text style={styles.appVersion}>Ujek App v1.0.0</Text>
                <Text style={styles.appCopyright}>© 2024 Ujek Indonesia</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    profileHeader: {
        backgroundColor: '#009966',
        padding: 20,
        alignItems: 'center',
        paddingTop: 40
    },
    avatarContainer: {
        marginBottom: 16
    },
    avatarPlaceholder: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#009966'
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4
    },
    userEmail: {
        fontSize: 14,
        color: '#e6f7f0',
        marginBottom: 20
    },
    statsContainer: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 20,
        padding: 16,
        width: '100%',
        justifyContent: 'space-around'
    },
    statItem: {
        alignItems: 'center'
    },
    statValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4
    },
    statLabel: {
        fontSize: 12,
        color: '#e6f7f0'
    },
    statSeparator: {
        width: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.3)'
    },
    infoCard: {
        backgroundColor: '#f8f8f8',
        margin: 20,
        padding: 20,
        borderRadius: 12,
        borderLeftWidth: 4,
        borderLeftColor: '#009966'
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16
    },
    infoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    infoLabel: {
        fontSize: 14,
        color: '#666'
    },
    infoValue: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333'
    },
    editButton: {
        backgroundColor: '#009966',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16
    },
    editButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14
    },
    menuSection: {
        marginHorizontal: 20,
        marginBottom: 20
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0'
    },
    menuLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    menuIcon: {
        fontSize: 20,
        marginRight: 12,
        width: 24
    },
    menuText: {
        fontSize: 16,
        color: '#333'
    },
    menuArrow: {
        fontSize: 18,
        color: '#999'
    },
    appInfo: {
        alignItems: 'center',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
        marginHorizontal: 20
    },
    appVersion: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4
    },
    appCopyright: {
        fontSize: 12,
        color: '#999'
    }
});

export default ProfileScreen;