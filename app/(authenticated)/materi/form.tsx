import IconTimer from '@/components/icons/IconTimer';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import AttachmentInput from '@/components/ui/attachment/attachmentInput';
import { Button } from '@/components/ui/button';
import ModalAction from '@/components/ui/modalAction';
import ModalSuccess from '@/components/ui/modalSuccess';
import RadioButton from '@/components/ui/radioButton';
import TextInput from '@/components/ui/textInput';
import { Typography } from '@/components/ui/typography';
import View from '@/components/view';
import { router } from 'expo-router';
import { useCallback, useMemo, useState } from 'react';
import { FlatList, Image, StyleSheet } from 'react-native';

const ELearningFormScreen = () => {
  const [selectNumber, setSelectNumber] = useState<number>(1);
  const [isBack, setIsBack] = useState<boolean>(false);
  const [answer, setAnswer] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const DATA_QUESTIONS = [
    {
      id: 1,
      type: 'Essay',
      title: 'Ada .. kue lapis',
      image: require('../../../assets/images/quiz1.png'),
      options: [],
    },
    {
      id: 2,
      type: 'Pilgan',
      title:
        'Nala mempunyai 16 mainan. Nala memberikan 7 mainan untuk adiknya. Berapa mainan Nala yang tersisa?',
      image: '',
      options: ['7', '8', '9'],
    },
    {
      id: 3,
      type: 'Upload',
      title:
        'Nala mempunyai 16 mainan. Nala memberikan 7 mainan untuk adiknya. Berapa mainan Nala yang tersisa?',
      image: require('../../../assets/images/quiz2.png'),
      options: ['7', '8', '9'],
    },
    {
      id: 4,
      type: 'Pilgan',
      title:
        'Nala mempunyai 16 mainan. Nala memberikan 7 mainan untuk adiknya. Berapa mainan Nala yang tersisa?',
      image: '',
      options: ['7', '8', '9'],
    },
    {
      id: 5,
      type: 'Upload',
      title:
        'Nala mempunyai 16 mainan. Nala memberikan 7 mainan untuk adiknya. Berapa mainan Nala yang tersisa?',
      image: require('../../../assets/images/quiz2.png'),
      options: ['7', '8', '9'],
    },
    {
      id: 6,
      type: 'Essay',
      title: 'Ada .. kue lapis',
      image: require('../../../assets/images/quiz1.png'),
      options: [],
    },
  ];

  const handleOnBack = () => setIsBack(!isBack);

  const handleNext = useCallback(() => {
    if (selectNumber !== 10) {
      setSelectNumber(selectNumber + 1);
    } else {
      setIsSuccess(!isSuccess);
    }
  }, [isSuccess, selectNumber]);

  const questionSelected = useMemo(
    () => DATA_QUESTIONS.find((item) => item.id === selectNumber),
    [DATA_QUESTIONS, selectNumber],
  );

  const renderTimer = useMemo(
    () => (
      <View style={styles.containerTimer}>
        <Typography>Sisa Waktu</Typography>
        <View
          style={{
            flexDirection: 'row',
            columnGap: 6,
          }}
        >
          <IconTimer color="secondary-500" />
          <Typography color="secondary-500">59:00</Typography>
        </View>
      </View>
    ),
    [],
  );

  const renderNumberList = useMemo(
    () => (
      <View style={{ marginTop: 12 }}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Button
              onPress={() => setSelectNumber(item)}
              variant={selectNumber === item ? 'primary' : 'outlined'}
              key={item}
              style={{
                paddingHorizontal: 16,
                marginRight: 16,
                elevation: 10,
                shadowColor: '#00000033',
                shadowOpacity: 0.2,
              }}
            >
              {`${item}`}
            </Button>
          )}
        />
      </View>
    ),
    [selectNumber],
  );

  const renderQuestion = useMemo(
    () => (
      <View style={styles.containerQuestion}>
        {questionSelected?.type === 'Essay' ? (
          <View style={{ marginTop: 20, gap: 12 }}>
            {!!questionSelected.image && (
              <Image
                source={questionSelected.image}
                style={{ width: '100%', alignSelf: 'center' }}
                resizeMode="contain"
              />
            )}
            <Typography>{questionSelected?.title}</Typography>

            <TextInput
              label="Jawaban"
              numberOfLines={5}
              multiline
              textAlignVertical="top"
              placeholder="Jawaban"
              borderRadius={8}
              style={{ minHeight: 100 }}
              hintMessage="1/200"
            />
          </View>
        ) : questionSelected?.type === 'Pilgan' ? (
          <View style={{ marginTop: 20, gap: 12 }}>
            {!!questionSelected?.image && (
              <Image
                source={questionSelected.image}
                style={{ width: '100%', alignSelf: 'center' }}
                resizeMode="contain"
              />
            )}
            <Typography>{questionSelected?.title}</Typography>
            <Typography style={{ marginTop: 12, marginBottom: -6 }}>
              Pilih Jawaban
            </Typography>

            {['7', '9', '10'].map((item) => (
              <View key={item} style={styles.optionAnswer}>
                <RadioButton
                  onPress={() => setAnswer(item)}
                  value={item}
                  option={item}
                  selected={answer}
                  textColor="line"
                />
              </View>
            ))}
          </View>
        ) : (
          <View style={{ marginTop: 20, gap: 12 }}>
            {!!questionSelected?.image && (
              <Image
                source={questionSelected.image}
                style={{ width: '100%', alignSelf: 'center' }}
                resizeMode="contain"
              />
            )}

            <Typography>Silakan unggah file jawaban</Typography>

            <AttachmentInput label="Unggah File" />
          </View>
        )}
      </View>
    ),
    [
      answer,
      questionSelected?.image,
      questionSelected?.title,
      questionSelected?.type,
    ],
  );

  const renderButtonAction = useMemo(
    () => (
      <View style={styles.containerButtonAction}>
        <View style={{ flex: 1 }}>
          <Button
            onPress={() => setSelectNumber(selectNumber - 1)}
            disabled={selectNumber === 1}
            variant="outlined"
          >
            Sebelumnya
          </Button>
        </View>

        <View style={{ flex: 1 }}>
          <Button onPress={handleNext}>
            {selectNumber === 10 ? 'Selesai' : 'Selanjutnya'}
          </Button>
        </View>
      </View>
    ),
    [handleNext, selectNumber],
  );

  return (
    <ParallaxScrollView onBackPress={handleOnBack} title="E-Learning & Tugas">
      <ThemedView style={styles.container}>
        <Typography fontFamily="Poppins-Bold" color="primary-500">
          Matematika
        </Typography>

        <Typography fontSize={12}>Pengukuran Waktu dan Panjang</Typography>
      </ThemedView>

      <ThemedView style={[styles.container, { marginBottom: 20 }]}>
        {renderTimer}
        {renderNumberList}
        {renderQuestion}
        {renderButtonAction}
      </ThemedView>

      <ModalAction
        visible={isBack}
        title="Kamu belum selesai mengerjakan tugas!"
        description="Keluar sebelum menyelesaikan tugas akan dianggap selesai"
        onAction={() => setIsBack(!isBack)}
        onNegativeAction={() => router.back()}
        isLoading={false}
        labelNegative="Keluar"
        labelPositive="Tetap Disini"
        image={require('../../../assets/images/exclamation.png')}
      />
      {isSuccess && (
        <ModalSuccess
          visible={isSuccess}
          setVisible={setIsSuccess}
          title="Tugas Berhasil Dikerjakan"
          subTitle="Sabar ya.. tugas kamu sedang diperiksa oleh guru, harap tunggu hasil nilai tugas kamu ya!"
          labelButton="Keluar"
          onButtonPositive={() => setIsSuccess(!isSuccess)}
        />
      )}
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    borderRadius: 8,
    padding: 16,
    marginTop: 24,
  },
  containerTimer: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#F1F1F1',
    borderWidth: 1,
    borderRadius: 8,
  },
  containerButtonAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    width: '100%',
    gap: 12,
  },
  containerQuestion: { marginTop: 12, paddingTop: 16, paddingBottom: 24 },
  optionAnswer: {
    padding: 12,
    borderColor: '#C4C4C4',
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 6,
  },
});

export default ELearningFormScreen;
