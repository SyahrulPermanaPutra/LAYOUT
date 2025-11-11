// screens/OrdersScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const OrdersScreen = () => {
    const [activeTab, setActiveTab] = useState('ongoing');

    const ordersData = {
        ongoing: [
            { 
                id: 1, 
                service: 'URide', 
                date: '12 Nov 2023', 
                time: '14:30', 
                status: 'Dalam Perjalanan',
                price: 'Rp 25.000',
                driver: 'Budi Santoso',
                vehicle: 'Honda Beat - AB 1234 CD',
                from: 'Jl. Sudirman No. 123',
                to: 'Grand Indonesia Mall'
            },
            { 
                id: 2, 
                service: 'IFood', 
                date: '12 Nov 2023', 
                time: '15:00', 
                status: 'Sedang Diproses',
                price: 'Rp 45.000',
                restaurant: 'McDonald\'s',
                items: '2x Big Mac, 1x French Fries'
            },
        ],
        history: [
            { 
                id: 3, 
                service: 'UCar', 
                date: '10 Nov 2023', 
                time: '09:15', 
                status: 'Selesai',
                price: 'Rp 150.000',
                driver: 'Siti Rahayu',
                vehicle: 'Toyota Avanza - AB 5678 EF',
                rating: 5
            },
            { 
                id: 4, 
                service: 'USend', 
                date: '8 Nov 2023', 
                time: '16:45', 
                status: 'Selesai',
                price: 'Rp 35.000',
                from: 'Kantor Pos',
                to: 'Rumah Sakit Umum',
                rating: 4
            },
        ]
    };

    const getServiceIcon = (service) => {
        const icons = {
            'URide': '🚗',
            'UCar': '🚙',
            'IFood': '🍔',
            'USend': '📦',
            'UMart': '🛒',
            'UPulsa': '📱'
        };
        return icons[service] || '📋';
    };

    const getStatusColor = (status) => {
        const colors = {
            'Dalam Perjalanan': '#FFA500',
            'Sedang Diproses': '#FFA500',
            'Selesai': '#009966',
            'Dibatalkan': '#FF4444'
        };
        return colors[status] || '#666';
    };

    const renderOrderItem = ({ item }) => (
        <TouchableOpacity style={styles.orderCard}>
            <View style={styles.orderHeader}>
                <View style={styles.serviceInfo}>
                    <Text style={styles.serviceIcon}>{getServiceIcon(item.service)}</Text>
                    <View>
                        <Text style={styles.serviceName}>{item.service}</Text>
                        <Text style={styles.orderDateTime}>{item.date} • {item.time}</Text>
                    </View>
                </View>
                <View style={[styles.statusBadge, { backgroundColor: getStatusColor(item.status) }]}>
                    <Text style={styles.statusText}>{item.status}</Text>
                </View>
            </View>

            <View style={styles.orderDetails}>
                {item.driver && (
                    <Text style={styles.detailText}>Driver: {item.driver}</Text>
                )}
                {item.vehicle && (
                    <Text style={styles.detailText}>Kendaraan: {item.vehicle}</Text>
                )}
                {item.restaurant && (
                    <Text style={styles.detailText}>Restaurant: {item.restaurant}</Text>
                )}
                {item.items && (
                    <Text style={styles.detailText}>Pesanan: {item.items}</Text>
                )}
                {item.from && (
                    <Text style={styles.detailText}>Dari: {item.from}</Text>
                )}
                {item.to && (
                    <Text style={styles.detailText}>Ke: {item.to}</Text>
                )}
            </View>

            <View style={styles.orderFooter}>
                <Text style={styles.priceText}>{item.price}</Text>
                {item.rating && (
                    <View style={styles.ratingContainer}>
                        <Text style={styles.ratingText}>⭐ {item.rating}/5</Text>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Pesanan Saya</Text>
            
            <View style={styles.tabContainer}>
                <TouchableOpacity 
                    style={[styles.tab, activeTab === 'ongoing' && styles.activeTab]}
                    onPress={() => setActiveTab('ongoing')}
                >
                    <Text style={[styles.tabText, activeTab === 'ongoing' && styles.activeTabText]}>
                        Berlangsung
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.tab, activeTab === 'history' && styles.activeTab]}
                    onPress={() => setActiveTab('history')}
                >
                    <Text style={[styles.tabText, activeTab === 'history' && styles.activeTabText]}>
                        Riwayat
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={ordersData[activeTab]}
                keyExtractor={item => item.id.toString()}
                renderItem={renderOrderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>Tidak ada pesanan {activeTab === 'ongoing' ? 'yang berlangsung' : 'dalam riwayat'}</Text>
                    </View>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#009966',
        textAlign: 'center'
    },
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        padding: 4,
        marginBottom: 20
    },
    tab: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 8
    },
    activeTab: {
        backgroundColor: '#009966'
    },
    tabText: {
        fontWeight: '600',
        color: '#666'
    },
    activeTabText: {
        color: '#fff'
    },
    listContent: {
        paddingBottom: 20
    },
    orderCard: {
        backgroundColor: '#f8f8f8',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        borderLeftWidth: 4,
        borderLeftColor: '#009966'
    },
    orderHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 12
    },
    serviceInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    serviceIcon: {
        fontSize: 24,
        marginRight: 12
    },
    serviceName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
    },
    orderDateTime: {
        fontSize: 12,
        color: '#666',
        marginTop: 2
    },
    statusBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12
    },
    statusText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#fff'
    },
    orderDetails: {
        marginBottom: 12
    },
    detailText: {
        fontSize: 12,
        color: '#666',
        marginBottom: 4
    },
    orderFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    priceText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#009966'
    },
    ratingContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd'
    },
    ratingText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#333'
    },
    emptyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 40
    },
    emptyText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center'
    }
});

export default OrdersScreen;