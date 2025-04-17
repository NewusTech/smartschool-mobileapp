import {
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import IconEdit from '@/components/icons/IconEdit';
import IconLogout from '@/components/icons/IconLogout';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Ionicons } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';

import {
  IconCamera,
  IconEye,
  IconEyeSlice,
  IconGallery,
} from '@/components/icons';
import { ThemedView } from '@/components/ThemedView';
import { Button } from '@/components/ui/button';
import ModalAction from '@/components/ui/modalAction';
import ModalSwipe from '@/components/ui/modalSwipe';
import TextInput from '@/components/ui/textInput';
import { Typography } from '@/components/ui/typography';
import { maskingPassword } from '@/helpers';
import { handleLogoutSession } from '@/services/auth.service';
import {
  PostProfilePayload,
  postProfilePayloadSchema,
} from '@/services/profile/validation';

export default function ProfileScreen() {
  const { control, handleSubmit, setValue } = useForm<PostProfilePayload>({
    defaultValues: {
      name: '',
      telephone: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(postProfilePayloadSchema),
    mode: 'all',
  });
  const watch = useWatch({ control });

  const router = useRouter();

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isChangePhotoProfile, setIsChangePhotoProfile] =
    useState<boolean>(false);
  const [isChangePassword, setIsChangePassword] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLogout, setIsLogout] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleLogout = useCallback(() => {
    setIsLoading(true);
    router.replace('/auth/login');
    handleLogoutSession();
    setIsLoading(false);
  }, [router]);

  const handleEdit = useCallback(() => setIsEdit(!isEdit), [isEdit]);

  const handleChangePhotoProfile = useCallback(
    () => setIsChangePhotoProfile(!isChangePhotoProfile),
    [isChangePhotoProfile],
  );

  const handleChangePassword = useCallback(
    () => setIsChangePassword(!isChangePassword),
    [isChangePassword],
  );

  const handleUpdateProfile = () => {};

  useEffect(() => {
    setValue('name', 'Annisa Rachma');
    setValue('telephone', '0862178281281');
    setValue('email', 'annisarachma@gmail.com');
    setValue('password', 'sasiashiasosa');
    setIsLoading(false);
  }, [setValue]);

  const renderEdit = useMemo(
    () => (
      <View style={{ flex: 1 }}>
        <View style={{ position: 'relative' }}>
          <Image
            source={require('../../../assets/images/student.png')}
            style={styles.profileImage}
          />
          <Button
            style={styles.buttonEdit}
            onPress={handleChangePhotoProfile}
            iconBefore={<IconEdit color="white" />}
          >
            Ubah
          </Button>
        </View>

        <View style={styles.form}>
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState }) => (
              <TextInput
                label="Nama Lengkap"
                placeholder="Nama Lengkap"
                borderRadius={8}
                value={field.value}
                onBlur={field.onBlur}
                onChangeText={field.onChange}
                errorMessage={fieldState.error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="telephone"
            render={({ field, fieldState }) => (
              <TextInput
                label="No. Telepone"
                placeholder="No. Telepone"
                borderRadius={8}
                value={field.value}
                onBlur={field.onBlur}
                onChangeText={field.onChange}
                errorMessage={fieldState.error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field, fieldState }) => (
              <TextInput
                label="Email"
                placeholder="Contoh@gmail.com"
                keyboardType="email-address"
                borderRadius={8}
                value={field.value}
                onBlur={field.onBlur}
                onChangeText={field.onChange}
                errorMessage={fieldState.error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field, fieldState }) => (
              <TextInput
                label={isChangePassword ? 'Kata Sandi Lama' : 'Kata Sandi'}
                placeholder="Kata Sandi"
                secureTextEntry
                borderRadius={8}
                value={field.value}
                onBlur={field.onBlur}
                onChangeText={field.onChange}
                errorMessage={fieldState.error?.message}
              />
            )}
          />

          {isChangePassword && (
            <>
              <Controller
                control={control}
                name="password"
                render={({ field, fieldState }) => (
                  <TextInput
                    label={'Kata Sandi Baru'}
                    placeholder="Kata Sandi Baru"
                    secureTextEntry
                    borderRadius={8}
                    value={field.value}
                    onBlur={field.onBlur}
                    onChangeText={field.onChange}
                    errorMessage={fieldState.error?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="password"
                render={({ field, fieldState }) => (
                  <TextInput
                    label="Ulang Kata Sandi Baru"
                    placeholder="Kata Sandi"
                    secureTextEntry
                    borderRadius={8}
                    value={field.value}
                    onBlur={field.onBlur}
                    onChangeText={field.onChange}
                    errorMessage={fieldState.error?.message}
                  />
                )}
              />
            </>
          )}

          {!isChangePassword && (
            <TouchableWithoutFeedback onPress={handleChangePassword}>
              <Typography fontFamily="Poppins-Bold" color="primary-500">
                Ubah Sandi
              </Typography>
            </TouchableWithoutFeedback>
          )}
        </View>

        <View style={styles.buttonAction}>
          <View style={{ flex: 1 }}>
            <Button
              onPress={() => {
                handleEdit();
                handleChangePassword();
              }}
              variant="outlined"
              color="error-40"
              style={{ width: '100%' }}
            >
              Batalkan
            </Button>
          </View>

          <View style={{ flex: 1 }}>
            <Button
              onPress={() => handleSubmit(handleUpdateProfile)}
              style={{ width: '100%' }}
            >
              Simpan
            </Button>
          </View>
        </View>
      </View>
    ),
    [
      handleChangePhotoProfile,
      control,
      isChangePassword,
      handleChangePassword,
      handleEdit,
      handleSubmit,
    ],
  );

  const renderInformation = useMemo(
    () => (
      <View>
        <Image
          source={require('../../../assets/images/student.png')}
          style={styles.profileImage}
        />

        <View style={{ marginTop: 16, gap: 16 }}>
          <View>
            <Typography>Nama Lengkap</Typography>
            <Typography style={styles.value}>{watch.name}</Typography>
          </View>

          <View>
            <Typography>No. Telepon</Typography>
            <Typography style={styles.value}>{watch.telephone}</Typography>
          </View>

          <View>
            <Typography>Email</Typography>
            <Typography style={styles.value}>{watch.email}</Typography>
          </View>

          <View>
            <Typography>Kata Sandi</Typography>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Typography style={styles.value}>
                {showPassword
                  ? watch.password
                  : maskingPassword(watch.password || '')}
              </Typography>
              <TouchableOpacity
                style={styles.iconPassword}
                onPress={() => setShowPassword(!showPassword)}
              >
                <View>
                  {showPassword ? (
                    <IconEye color="text-default" />
                  ) : (
                    <IconEyeSlice color="text-default" />
                  )}
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Button
          onPress={() => setIsLogout(!isLogout)}
          variant="outlined"
          color="error-40"
          style={styles.buttonLogout}
          iconBefore={<IconLogout color="error-40" />}
        >
          Keluar
        </Button>
      </View>
    ),
    [isLogout, showPassword, watch],
  );

  const renderLogActivity = useMemo(
    () => (
      <ThemedView style={styles.card}>
        <Typography style={styles.title}>Log Aktifitas</Typography>

        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <View
            key={item}
            style={[
              index + 1 === 11 ? null : styles.item,
              {
                marginTop: 12,
                padding: 12,
              },
            ]}
          >
            <Typography
              fontSize={16}
              fontFamily="Poppins-Bold"
              style={{ lineHeight: 20 }}
            >
              Login
            </Typography>
            <Typography
              color="text-secondary"
              style={{
                lineHeight: 20,
              }}
            >
              12/03/2025 14:34:20
            </Typography>
          </View>
        ))}
      </ThemedView>
    ),
    [],
  );

  const renderChangePhotoProfile = useMemo(
    () => (
      <ModalSwipe
        title="Ubah Foto"
        modalVisible={isChangePhotoProfile}
        setModalVisible={handleChangePhotoProfile}
      >
        <Pressable
          style={{ paddingVertical: 8, flexDirection: 'row', columnGap: 8 }}
        >
          <IconGallery color="text-default" />
          <Typography color="text-secondary">Pilih Dari Galeri</Typography>
        </Pressable>

        <Pressable
          style={{ paddingVertical: 8, flexDirection: 'row', columnGap: 8 }}
        >
          <IconCamera color="text-default" />
          <Typography color="text-secondary">Ambil Foto</Typography>
        </Pressable>
      </ModalSwipe>
    ),
    [isChangePhotoProfile, handleChangePhotoProfile],
  );

  const renderDialogConfirmationLogout = useMemo(
    () => (
      <ModalAction
        visible={isLogout}
        onAction={handleLogout}
        onNegativeAction={() => setIsLogout(!isLogout)}
        isLoading={isLoading}
        title="Keluar dari Smart School?"
      />
    ),
    [isLogout, handleLogout, isLoading],
  );

  return (
    <ParallaxScrollView
      headerImage={
        <ThemedView style={styles.titleContainer}>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={{
              width: 153,
              height: 48,
              alignSelf: 'center',
            }}
          />
          <Ionicons name="notifications-outline" size={24} color="black" />
        </ThemedView>
      }
    >
      <ThemedView style={styles.card}>
        <View style={styles.cardHeader}>
          <Typography style={styles.title}>Profil</Typography>

          {!isEdit && (
            <Button
              onPress={handleEdit}
              iconBefore={<IconEdit color="white" />}
            >
              Ubah
            </Button>
          )}
        </View>

        {isEdit ? renderEdit : renderInformation}
      </ThemedView>

      {!isEdit && renderLogActivity}

      {isLogout && renderDialogConfirmationLogout}
      {isChangePhotoProfile && renderChangePhotoProfile}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    marginBottom: 24,
    marginHorizontal: 20,
    padding: 16,
  },
  cardHeader: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileImage: {
    alignSelf: 'center',
    marginTop: 16,
  },
  item: {
    borderBottomColor: '#C7C7CD',
    borderBottomWidth: 1,
  },
  title: { fontSize: 14, fontWeight: 'bold' },
  titleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'space-between',
    padding: 20,
  },
  value: { fontWeight: 'bold', marginTop: -6 },
  buttonEdit: { position: 'absolute', alignSelf: 'center', top: -20 },
  form: { marginTop: 36, gap: 16 },
  buttonAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
    marginTop: 36,
  },
  iconPassword: { marginLeft: 5, marginTop: -5 },
  buttonLogout: { marginTop: 16 },
});
