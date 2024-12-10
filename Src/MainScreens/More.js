import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';

// AdminProfile component
const AdminProfile = () => {
  const handleLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      {/* First Admin */}
      <View style={styles.headerContainer}>
        <Image
          source={require('../assets/Aftab.jpg')} // Replace with actual path
          style={styles.profileImage}
        />
        <Text style={styles.name}>Aftab Ali</Text>
        <Text style={styles.role}>Full-Stack Developer</Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <Text style={styles.sectionContent}>Email: admin@company.com</Text>
        <Text style={styles.sectionContent}>Phone: +92 3189470049</Text>
        <Text style={styles.sectionContent}>Location: Abbottabad, Pakistan</Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <Text style={styles.sectionContent}>• React Native, Java, Python</Text>
        <Text style={styles.sectionContent}>• Firebase, UI/UX Design</Text>
        <Text style={styles.sectionContent}>• Figma, MySQL, JavaScript</Text>
      </View>

      {/* Second Admin */}
      <View style={styles.headerContainer}>
        <Image
          source={require('../assets/hammad.jpg')} // Replace with actual path
          style={styles.profileImage}
        />
        <Text style={styles.name}>Hammad Ayub</Text>
        <Text style={styles.role}>Front-End Developer</Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <Text style={styles.sectionContent}>Email: admin@company.com</Text>
        <Text style={styles.sectionContent}>Phone: +92 3249095988</Text>
        <Text style={styles.sectionContent}>Location: Abbottabad, Pakistan</Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <Text style={styles.sectionContent}>• React Native, MongoDB</Text>
        <Text style={styles.sectionContent}>• Firebase, UI/UX Design</Text>
        <Text style={styles.sectionContent}>• Figma, JavaScript</Text>
      </View>

      {/* Social Links */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Social Links</Text>
        <View style={styles.socialLinksContainer}>
          <TouchableOpacity onPress={() => handleLink('https://www.linkedin.com/feed/')}>
            <Text style={styles.socialLink}>LinkedIn</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLink('https://github.com/')}>
            <Text style={styles.socialLink}>GitHub</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

// Styles using StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F9',
    paddingBottom: 20, // Adds space at the bottom for scrolling
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#007bff',
  },
  name: {
    fontSize: 25,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  role: {
    fontSize: 22,
    color: '#007bff',
    marginBottom: 12,
    fontWeight: '600',
  },
  sectionContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 16,
    color: '#555',
    marginBottom: 6,
    lineHeight: 24,
  },
  socialLinksContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
  socialLink: {
    fontSize: 16,
    color: '#007bff',
    textDecorationLine: 'underline',
    marginHorizontal: 20,
  },
});

export default AdminProfile;
