import { ArrowBack } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoDetail } from "../services/api";

const TodoDetailPage = () => {
  const [todoDetail, setTodoDetail] = useState({});
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    (async () => {
      const res = await getTodoDetail(params.id);
      if (res.status_code === 200) setTodoDetail(res.data);
    })();
  }, [params.id]);

  return (
    <Box>
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBack />
      </IconButton>
      <Typography>Task ID : {todoDetail.id}</Typography>
      <Typography>Task Name : {todoDetail.task_name}</Typography>
      <Typography>
        Task Status : {todoDetail.task_status === 1 ? "Done" : "Undone"}
      </Typography>
      <Typography>Last Update : {todoDetail.updated_at}</Typography>
    </Box>
  );
};

export default TodoDetailPage;
