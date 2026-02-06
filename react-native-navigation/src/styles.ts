import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    position: 'relative',
  },
  // --- Card Styles (Used in Home & Cart) ---
   card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 16, // Smoother corners
    padding: 12,
    minHeight: 100, // Ensure enough height for the image
    elevation: 3, 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  cardDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
  },
  // --- Buttons ---
  addBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  addBtnText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 50,
    elevation: 6,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  floatingBtnText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  // --- Cart Specifics ---
  emptyContainer: {
      alignItems: 'center',
      marginTop: 50,
  },
  qtyContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 10, 
  },
  qtyBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4,
  },
  qtyBtnText: {
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: 20,
  },
  qtyValue: {
      fontWeight: 'bold',
      fontSize: 15,
      marginVertical: 2,
  },
  // --- Footer ---
   footerContainer: {
      padding: 20,
      borderTopWidth: 1,
      backgroundColor: 'white', // fallback
      // Ensure bottom positioning works
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10, // Keep it above the empty list text
  },
  footerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 15,
  },
  totalLabel: {
      fontSize: 16,
  },
  totalValue: {
      fontSize: 24,
      fontWeight: 'bold',
  },
  checkoutBtn: {
      paddingVertical: 15,
      borderRadius: 12,
      alignItems: 'center',
  },
  checkoutBtnText: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 18,
  },
  // --- Summary (Checkout) ---
  summaryCard: {
      padding: 20,
      borderRadius: 15,
  },
  summaryTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 15,
  },
  summaryRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 8,
  },
  divider: {
      height: 1,
      marginVertical: 15,
  },
    clearAllBtn: {
    alignSelf: 'flex-end',
    marginHorizontal: 20,
    marginTop: 10,
    padding: 5,
  },
  clearAllText: {
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'underline',
  }
});