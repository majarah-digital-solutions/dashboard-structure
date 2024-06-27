"use client";
import { IoArrowBackSharp } from "react-icons/io5";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { mainToggle } from "~/app/appSlice";
import { Grid } from "@mui/material";

const StudentDetails = ({ data, location = false }: any) => {
  const { showModel } = useSelector((state: any) => state.config);

  const dispatch = useDispatch();

  const toggleModelHandler = () => {
    dispatch(mainToggle({}));
  };

  return (
    <>
      <div
        className={` newSideTable    ${showModel && "active"}`}
        style={{ width: 400 }}
      >
        <div className="modalHead">
          <button onClick={toggleModelHandler}>
            <IoArrowBackSharp />
          </button>
          <h6> بيانات </h6>
        </div>
        <div className="newBody pt-2 text-center ">
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItemText className="pb-3" primary={"المستخدم"} />
            <Grid
              container
              alignItems="center"
              spacing={2}
              className="border-b-2 border-gray-200 pb-3"
            >
              <Grid item xs textAlign={"right"}>
                <Typography variant="h6" component="div">
                  {data?.fullname}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  رقم الهاتف: {data?.phone || "---"}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  الحاله: {data?.blocked ? "الحساب غير نشط" : "الحساب نشط"}
                </Typography>

              </Grid>
              <Grid item>
                <Avatar
                  alt="Remy Sharp"
                  src={data?.avatarUrl}
                  style={{ width: "80px", height: "80px" }}
                />

              </Grid>
            </Grid>

            <Divider className="Divider" variant="inset" component="li" />
          </List>

      
        </div>
      </div>
      {showModel ? (
        <div
          className="sidebar-overlay-left"
          onClick={toggleModelHandler}
        ></div>
      ) : null}
    </>
  );
};

export default StudentDetails;
