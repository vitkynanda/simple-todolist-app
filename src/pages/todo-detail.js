import { ArrowBack } from "@mui/icons-material";
import { Divider, IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
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
    <Layout title="Todo Detail">
      <Stack spacing={2} mt={1}>
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBack />
          </IconButton>
          <Typography>Go Back</Typography>
        </Stack>
        <Divider />
        <Typography>Task ID : {todoDetail.id}</Typography>
        <Typography>Task Name : {todoDetail.task_name}</Typography>
        <Typography>
          Task Status : {todoDetail.task_status === 1 ? "Done" : "Undone"}
        </Typography>
        <Typography>
          Last Update : {new Date(todoDetail.updated_at).toDateString()}
        </Typography>
      </Stack>
    </Layout>
  );
};

export default TodoDetailPage;
