import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestions(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestion() {
      const db = getDatabase();
      const quizRef = ref(db, "quiz/" + videoID + "/questions");
      const quizQuery = query(quizRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        // request firebase database
        const snapshot = await get(quizQuery);
        setLoading(false);

        if (snapshot.exists()) {
          setQuestions((prevQuestions) => {
            return [...prevQuestions, Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    }

    fetchQuestion();
  }, [videoID]);

  return {
    loading,
    error,
    questions,
  };
}
