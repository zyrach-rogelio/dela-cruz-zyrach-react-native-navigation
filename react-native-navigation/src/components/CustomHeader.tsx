import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { useTheme } from '../context';

interface CustomHeaderProps {
    title: string;
    showThemeToggle?: boolean;
    onBack?: () => void;
}

export const CustomHeader = ({ title, showThemeToggle = false, onBack }: CustomHeaderProps) => {
    const { theme, toggleTheme, isDark } = useTheme();

    return (
        <View style={[styles.headerContainer, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {onBack && (
                    <TouchableOpacity onPress={onBack} style={{ marginRight: 15, padding: 5 }}>
                        <Text style={{ fontSize: 24, color: theme.primary, fontWeight: 'bold' }}>←</Text>
                    </TouchableOpacity>
                )}
                <Text style={[styles.headerTitle, { color: theme.text }]}>{title}</Text>
            </View>

            {showThemeToggle && (
                <View style={styles.switchContainer}>
                    <Text style={{ marginRight: 8, fontSize: 16 }}>{isDark ? '🌙' : '☀️'}</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: theme.primary }}
                        thumbColor={isDark ? '#f4f3f4' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleTheme}
                        value={isDark}
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});