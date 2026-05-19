export function useDebounceSearch(callback, initialValue = [], delay) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(callback().then(setLoadingState()));
    }, delay);
    return () => clearTimeout(timer);
  }, [callback, delay]);

  return {value, loadingState};
}

// 1. Callback
// 2. Initial Value (opt)
// 3. Delay
const debouncedSearchValue = useDebounceSearch(fetchData, initialValue, delay);

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    setMessages([...messages, { id: Date.now(), text: input, user: 'me' }]);
    setInput('');
  };

  const renderMessage = ({ item }) => (
<View style={{ padding: 10, backgroundColor: item.user === 'me' ? '#DCF8C6' : '#FFF' }}>
<Text>{item.text}</Text>
<Text style={{ fontSize: 10 }}>{new Date(item.id).toLocaleTimeString()}</Text>
</View>
  );

  return (
<View style={{ flex: 1 }}>
<FlatList data={messages} renderItem={renderMessage} />
<View style={{ flexDirection: 'row' }}>
<TextInput value={input} onChangeText={setInput} style={{ flex: 1, borderWidth: 1 }} />
<Button title="Send" onPress={sendMessage} />
</View>
</View>
  );
};
